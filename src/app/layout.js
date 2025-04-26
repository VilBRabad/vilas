import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";

const ubuntuSans = Ubuntu_Sans({
  subsets: ['latin'], 
  weight: ['400', '500', '700', '800'],
  variable: '--font-ubuntu-sans',
})

export const metadata = {
  title: "Vilas Rabad - Web Developer",
  description: "This is Vilas Rabad, a student and web developer who loves turning ideas into beautiful, user-friendly websites.",
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
