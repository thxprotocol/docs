const dotenv = require('dotenv');

dotenv.config()

module.exports = {
  title: 'Developer',
  tagline: '',
  url: 'https://docs.thx.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thxprotocol', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    gtag: {
      trackingID: process.env.GTM,
    },
    navbar: {
      title: 'Developers',
      logo: {
        alt: 'THX Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/thxprotocol/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'API Specification',
              to: '/swagger-docs',
            },
            {
              label: 'Network Details',
              to: '/networks',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/thxprotocol',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/thxprotocol',
            },
            {
              label: 'Slack',
              href: 'https://thx.page.link/slack',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} THX.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/thxprotocol/docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
