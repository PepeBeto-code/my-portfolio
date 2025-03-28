import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pepe Dev | Portafolio de Desarrollador de software",
  description: "Portafolio personal de Pepe Dev, desarrollador web especializado en tecnologías como Next.js, React y Angular.",
  keywords: "desarrollador web, desarrollador de software, Next.js, React, Angular, portafolio, Pepe Dev",
  openGraph: {
    title: "Pepe Dev | Portafolio de Desarrollador Web",
    description: "Portafolio personal de Pepe Dev, desarrollador web especializado en tecnologías como Next.js, React y Angular.",
    url: "https://pepedigital.netlify.app/",  // Cambia esto por tu dominio real
    siteName: "Pepe Dev",
    images: [
      {
        url: "/og-image.jpg",  // Cambia esto por una imagen representativa para compartir en redes
        width: 1200,
        height: 630,
        alt: "Portafolio de Pepe Dev",
      },
    ],
  },
  other: {
    "google-site-verification": "xwKUZnrZ_niag9k_Y6pmNVizdv8NT2W-8X_RR03BgB4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
                          {/* Footer */}
    <footer className="footer">
      <p className="footer__content">&copy; {new Date().getFullYear()} Mi portafolio</p>
    </footer>
      </body>
    </html>
  );
}
