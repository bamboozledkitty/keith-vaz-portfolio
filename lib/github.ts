/**
 * GitHub API integration for content management
 * 
 * Uses GitHub Contents API to read/write portfolio content
 * https://docs.github.com/en/rest/repos/contents
 */

import { BentoItemData } from '../types';

// Repository configuration
const REPO_OWNER = 'bamboozledkitty';
const REPO_NAME = 'keith-vaz-portfolio';
const CONTENT_PATH = 'public/content/data.json';
const MEDIA_PATH = 'public/media';

// GitHub API base URL
const GITHUB_API = 'https://api.github.com';

interface GitHubFileResponse {
    sha: string;
    content: string;
    encoding: string;
}

interface ContentData {
    version: number;
    lastUpdated: string;
    items: BentoItemData[];
}

/**
 * Fetch content from the GitHub repository
 */
export async function fetchContentFromGitHub(token: string): Promise<ContentData> {
    const response = await fetch(
        `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch content: ${response.status}`);
    }

    const data: GitHubFileResponse = await response.json();
    // UTF-8 safe base64 decoding
    const content = decodeURIComponent(escape(atob(data.content)));
    return JSON.parse(content);
}

/**
 * Save content to the GitHub repository
 */
export async function saveContentToGitHub(
    token: string,
    items: BentoItemData[],
    commitMessage = 'Update portfolio content'
): Promise<void> {
    // First, get the current file SHA (required for updates)
    const currentFile = await fetch(
        `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
        }
    );

    if (!currentFile.ok) {
        throw new Error(`Failed to get current file: ${currentFile.status}`);
    }

    const currentData: GitHubFileResponse = await currentFile.json();

    // Prepare new content
    const newContent: ContentData = {
        version: 1,
        lastUpdated: new Date().toISOString(),
        items,
    };

    // UTF-8 safe base64 encoding
    const jsonString = JSON.stringify(newContent, null, 2);
    const contentBase64 = btoa(unescape(encodeURIComponent(jsonString)));

    // Update the file
    const response = await fetch(
        `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${CONTENT_PATH}`,
        {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: commitMessage,
                content: contentBase64,
                sha: currentData.sha,
            }),
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to save content: ${error.message || response.status}`);
    }
}

/**
 * Upload a media file to the GitHub repository
 */
export async function uploadMediaToGitHub(
    token: string,
    file: File,
    folder: 'profile' | 'case-studies' | 'visual-design/images' | 'visual-design/videos' | 'apps' | 'social'
): Promise<string> {
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = `${MEDIA_PATH}/${folder}/${fileName}`;

    // Read file as base64
    const content = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            // Remove data URL prefix (data:image/png;base64,)
            const base64 = result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    // Check if file already exists (to get SHA for update)
    let sha: string | undefined;
    try {
        const existingFile = await fetch(
            `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        );
        if (existingFile.ok) {
            const data: GitHubFileResponse = await existingFile.json();
            sha = data.sha;
        }
    } catch {
        // File doesn't exist, that's fine
    }

    // Upload the file
    const response = await fetch(
        `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
        {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Add media: ${fileName}`,
                content,
                ...(sha && { sha }),
            }),
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to upload media: ${error.message || response.status}`);
    }

    // Return the path relative to public folder for use in content
    return `/media/${folder}/${fileName}`;
}

/**
 * Delete a media file from the GitHub repository
 */
export async function deleteMediaFromGitHub(
    token: string,
    mediaPath: string
): Promise<void> {
    // Convert content path to repo path
    const repoPath = `public${mediaPath}`;

    // Get file SHA
    const fileResponse = await fetch(
        `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${repoPath}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
        }
    );

    if (!fileResponse.ok) {
        throw new Error(`Failed to get file: ${fileResponse.status}`);
    }

    const fileData: GitHubFileResponse = await fileResponse.json();

    // Delete the file
    const response = await fetch(
        `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${repoPath}`,
        {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Delete media: ${mediaPath}`,
                sha: fileData.sha,
            }),
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to delete media: ${error.message || response.status}`);
    }
}
