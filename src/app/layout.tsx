import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import { FontProvider } from "./context/FontContext";


export const metadata: Metadata = {
  title: "Dictionary",
  description: "A dictionary web app that will help you to find unknown vocabs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
  {
  
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen px-5 sm:px-10 md:px-32 lg:px-60 bg-white dark:bg-dark">
      <FontProvider>
        <Providers>
          <Navbar />
          <main className="flex-grow bg-white dark:bg-dark">
              {children}
          </main>
        </Providers>
      </FontProvider>

      </body>
    </html>
  );
}
