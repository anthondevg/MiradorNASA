import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MiradorNASA",
  description: "UI to see Mars Rover photos from NASA API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex min-h-screen flex-col items-center justify-between p-2">
          <div className="z-10 md:w-full md:max-w-7xl font-mono">
            {children}{" "}
          </div>
        </div>
      </body>
    </html>
  );
}
