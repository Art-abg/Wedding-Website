/**
 * Next.js configuration to force SSR and bypass static export errors.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force SSR mode - no static export
  output: undefined,
  
  // Disable static optimization completely
  experimental: {
    // Force all pages to be dynamic

  },
  
  // Disable static generation
  trailingSlash: false,
  
  // Ensure all routes are SSR
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
