/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure that trailing slashes are handled correctly for GitHub Pages
    trailingSlash: true,
    // We use the root for base path as per current vite config
    basePath: '',
}

export default nextConfig;
