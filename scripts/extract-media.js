#!/usr/bin/env node
/**
 * Migration script to extract base64-encoded media from data.json
 * and replace them with file paths.
 * 
 * Run once: node scripts/extract-media.js
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_JSON_PATH = path.join(PROJECT_ROOT, 'public/content/data.json');
const EXTRACTED_DIR = path.join(PROJECT_ROOT, 'public/media/extracted');

// MIME type to file extension mapping
const MIME_TO_EXT = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/gif': '.gif',
  'image/webp': '.webp',
  'image/svg+xml': '.svg',
  'video/mp4': '.mp4',
  'video/webm': '.webm',
  'video/quicktime': '.mov',
};

/**
 * Parse a data URL and extract the MIME type and base64 data
 */
function parseDataUrl(dataUrl) {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return null;
  return {
    mimeType: match[1],
    base64Data: match[2],
  };
}

/**
 * Generate a short hash from the base64 data for unique filenames
 */
function generateHash(data) {
  return crypto.createHash('md5').update(data).digest('hex').substring(0, 12);
}

/**
 * Extract base64 data to a file and return the new path
 */
function extractToFile(dataUrl, itemId) {
  const parsed = parseDataUrl(dataUrl);
  if (!parsed) {
    console.warn(`  Warning: Could not parse data URL for item ${itemId}`);
    return null;
  }

  const ext = MIME_TO_EXT[parsed.mimeType];
  if (!ext) {
    console.warn(`  Warning: Unknown MIME type ${parsed.mimeType} for item ${itemId}`);
    return null;
  }

  const hash = generateHash(parsed.base64Data);
  const filename = `${itemId}-${hash}${ext}`;
  const filePath = path.join(EXTRACTED_DIR, filename);
  const relativePath = `/media/extracted/${filename}`;

  // Decode base64 and write to file
  const buffer = Buffer.from(parsed.base64Data, 'base64');
  fs.writeFileSync(filePath, buffer);

  console.log(`  Extracted: ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
  return relativePath;
}

/**
 * Process an item, extracting any base64 media
 */
function processItem(item) {
  let modified = false;
  const newItem = { ...item };

  // Check the 'image' field for base64 data
  if (item.image && item.image.startsWith('data:')) {
    const newPath = extractToFile(item.image, item.id);
    if (newPath) {
      newItem.image = newPath;
      modified = true;
    }
  }

  // Check the 'icon' field for base64 data
  if (item.icon && item.icon.startsWith('data:')) {
    const newPath = extractToFile(item.icon, `${item.id}-icon`);
    if (newPath) {
      newItem.icon = newPath;
      modified = true;
    }
  }

  return { item: newItem, modified };
}

async function main() {
  console.log('=== Base64 Media Extraction Script ===\n');

  // Ensure extracted directory exists
  if (!fs.existsSync(EXTRACTED_DIR)) {
    fs.mkdirSync(EXTRACTED_DIR, { recursive: true });
    console.log(`Created directory: ${EXTRACTED_DIR}\n`);
  }

  // Read data.json
  const originalSize = fs.statSync(DATA_JSON_PATH).size;
  console.log(`Original data.json size: ${(originalSize / 1024 / 1024).toFixed(2)} MB\n`);

  const rawData = fs.readFileSync(DATA_JSON_PATH, 'utf-8');
  const data = JSON.parse(rawData);

  // Process all items
  let extractedCount = 0;
  const newItems = data.items.map((item) => {
    const { item: newItem, modified } = processItem(item);
    if (modified) extractedCount++;
    return newItem;
  });

  // Update data and save
  const newData = {
    ...data,
    items: newItems,
    lastUpdated: new Date().toISOString(),
  };

  // Write updated data.json
  const newJson = JSON.stringify(newData, null, 2);
  fs.writeFileSync(DATA_JSON_PATH, newJson);

  const newSize = fs.statSync(DATA_JSON_PATH).size;
  console.log(`\n=== Results ===`);
  console.log(`Items with extracted media: ${extractedCount}`);
  console.log(`New data.json size: ${(newSize / 1024).toFixed(2)} KB`);
  console.log(`Size reduction: ${((1 - newSize / originalSize) * 100).toFixed(1)}%`);
  console.log(`\nExtracted files saved to: ${EXTRACTED_DIR}`);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
