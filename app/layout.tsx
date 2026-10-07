import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kathy's Programmer Profile", description: "A cute yellow-themed programmer profile for Kathy Sison." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }