/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://pepedigital.netlify.app/', // Cambia esto al dominio de tu sitio web
    generateRobotsTxt: true, // Opcional: genera también un robots.txt
    sitemapSize: 5000,  // Asegura que todos los links estén en un solo archivo si son pocos
  };
  
  module.exports = config;
  