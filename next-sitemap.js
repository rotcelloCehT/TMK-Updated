module.exports = {
  siteUrl: 'https://startup-agency-modern.vercel.app',
  generateRobotsTxt: true,
  // optional
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://example.com/my-custom-sitemap-1.xml',
  //     'https://example.com/my-custom-sitemap-2.xml',
  //     'https://example.com/my-custom-sitemap-3.xml',
  //   ],
  // },
};

export const KNOWN_PATHS = {
  CONFIG_FILE: getPath('next-sitemap.config.js'),
}
