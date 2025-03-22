import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es"> {/* Puedes cambiar "es" por el idioma de tu preferencia */}
      <Head>
        {/* Aquí agregas el favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Puedes agregar más meta tags o fuentes externas aquí */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
