// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OopsDB',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://oppsdb.coroot.com',
  baseUrl: '/',
  organizationName: 'coroot', // Usually your GitHub org/user name.
  projectName: 'oopsdb', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {src: '/js/st.js'},
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/coroot/oopsdb/tree/main/site',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social_image.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },

      navbar: {
        title: '',
        logo: {
          alt: 'Coroot Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://coroot.com',
            label: 'coroot.com',
            position: 'right',
          },
          {
            href: 'https://github.com/coroot/coroot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Coroot',
            items: [
              {
                label: 'Documentation',
                to: 'https://docs.coroot.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/coroot-community/shared_invite/zt-2te9x672s-4s_Wp732cd~o2vdFLNE5AA',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/coroot',
              },
              {
                label: 'X',
                href: 'https://x.com/coroot_com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'coroot.com',
                to: 'https://coroot.com',
              },
              {
                label: 'Blog',
                to: 'https://coroot.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/coroot/coroot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Coroot, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'bash'],
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // { from: '/configuration/cli-arguments', to: '/configuration/configuration' },
        ],
      },
    ],
  ],
};

export default config;
