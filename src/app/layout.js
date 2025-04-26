import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";

const ubuntuSans = Ubuntu_Sans({
  subsets: ['latin'], 
  weight: ['400', '500', '700', '800'],
  variable: '--font-ubuntu-sans',
})

export const metadata = {
  title: "Vilas Rabad - Web Developer",
  description: "Hi, I'm Vilas Rabad — a passionate web developer crafting dynamic, user-centric websites. Let's bring ideas to life through beautiful code!",
  keywords: "Vilas Rabad, Web Developer, Full Stack Developer, Portfolio, React Developer, Next.js Developer, Frontend Developer, Backend Developer, UI/UX Enthusiast",
  authors: [{ name: "Vilas Rabad" }],
  creator: "Vilas Rabad",
  openGraph: {
    title: "Vilas Rabad - Web Developer",
    description: "Portfolio of Vilas Rabad — building beautiful, fast, and scalable web experiences.",
    url: "https://your-portfolio-link.com", 
    siteName: "Vilas Rabad Portfolio",
    images: [
      {
        url: "https://your-portfolio-link.com/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Vilas Rabad Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilas Rabad - Web Developer",
    description: "Crafting beautiful and user-friendly websites and applications.",
    images: ["https://your-portfolio-link.com/og-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuSans.variable} font-[family-name:var(--font-ubuntu-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
