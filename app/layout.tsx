import type { Metadata } from "next";
import { Cinzel_Decorative, Merriweather } from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Chaser Productions - Barry Duffield",
  description: "Actor, Screenwriter, Producer - From Script to Spotlight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzelDecorative.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}