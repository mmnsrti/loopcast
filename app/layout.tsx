import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const manrope = Manrope({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "loop cast",
  description: "Share ai power videos with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717] antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
