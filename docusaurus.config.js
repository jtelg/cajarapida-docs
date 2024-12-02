// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Caja Rápida",
  tagline: "Gestión inteligente, resultados rápidos",
  favicon: "img/icon.webp",

  // Set the production url of your site here
  url: "https://docs.cajarapida.com.ar",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Custer Team", // Usually your GitHub org/user name.
  projectName: "cajarapida-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jtelg/cajarapida-docs",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jtelg/cajarapida-docs",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Caja Rápida",
        logo: {
          alt: "Caja rapida icon",
          src: "img/icon.webp",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/jtelg/cajarapida-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentos",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Redes Sociales",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com/custerok",
              },
              {
                label: "Whatsapp",
                href: "https://wa.me/5493536570880",
              },
              {
                label: "Sitio Web",
                href: "https://cajarapida.com.ar",
              },
            ],
          },
          {
            title: "Más información",
            items: [
              {
                label: "Blog",
                to: "/docs/intro",
              },
              {
                label: "GitHub",
                href: "https://github.com/jtelg/cajarapida-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Caja rápida. Desarrollado por Custer.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
