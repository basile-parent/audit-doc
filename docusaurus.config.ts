import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Documentation audit RGAA',
    tagline: '',
    favicon: "img/favicon_dark.png",
    noIndex: true,

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'basile-parent', // Usually your GitHub org/user name.
    projectName: 'audit-doc', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: "dark",
        },

        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Audit RGAA',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'rgaaSidebar',
                    position: 'left',
                    label: 'Pas à pas',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'resourcesSidebar',
                    position: 'left',
                    label: 'Ressources',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'faqSidebar',
                    position: 'left',
                    label: 'FAQ',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Références',
                    items: [
                        {
                            label: 'RGAA',
                            href: 'https://www.numerique.gouv.fr/publications/rgaa-accessibilite/',
                        },
                        {
                            label: 'W3C patterns',
                            href: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
                        },
                    ],
                },
                {
                    title: 'Outils',
                    items: [
                        {
                            label: 'Who can use (constrastes)',
                            href: 'https://www.whocanuse.com/',
                        },
                        {
                            label: 'Contrast finder',
                            href: 'https://app.contrast-finder.org/?lang=fr',
                        },
                        {
                            label: 'PDF validation',
                            href: 'https://pdfix.net/solutions/pdf-validation/',
                        },
                        {
                            label: 'A11y bookmarklets',
                            href: 'https://a11y-tools.com/bookmarklets/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Basile Parent.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        imageZoom: {
            // CSS selector to apply the plugin to, defaults to '.markdown img'
            selector: '.markdown img',
            // Optional medium-zoom options
            // see: https://www.npmjs.com/package/medium-zoom#options
            options: {
                margin: 24,
                background: '#838383BB',
                scrollOffset: 0,
            },
        },
    } satisfies Preset.ThemeConfig,
    plugins: [
        'plugin-image-zoom'
    ],
};

export default config;
