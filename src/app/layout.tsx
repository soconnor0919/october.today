import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "October Today",
  description: "October Today",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="animate-blob h-[800px] w-[800px] rounded-full bg-neutral-400/40 blur-3xl dark:bg-neutral-500/30"></div>
        </div>
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            defer
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          ></script>
        )}
      </body>
    </html>
  );
}
