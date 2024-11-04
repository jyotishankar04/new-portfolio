import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SJ.",
  description: "Jyotishankar Patra Portfolio",
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
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative h-screen flex flex-col justify-start items-center">
            <div className="sticky top-0 w-full z-50">
              {" "}
              {/* Increased z-index */}
              <Navbar />
            </div>
            <div className="pt-[0px] w-full h-full">
              {" "}
              {/* Adjusted padding to avoid overlap */}
              {children}
            </div>

            {/*<Footer />*/}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
