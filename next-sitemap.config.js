const config = {
    siteUrl: 'https://tedxglau.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
    },
  };
  
  module.exports = config;