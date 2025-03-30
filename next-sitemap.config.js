/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://pepedigital.netlify.app/', // Cambia esto al dominio de tu sitio web
    generateRobotsTxt: true, // Opcional: genera también un robots.txt
    sitemapSize: 5000,
    outDir: './out',
    // No generar un sitemapIndex, solo un sitemap.xml
    generateIndexSitemap: false,
  };
  
  module.exports = config;
  