import { Inter } from "next/font/google";
import "./globals.css";
import { dbConnect } from "@/lib/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Auth V5",
  description: "Learn Next-Auth ",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <html lang="en">
      <body classame={inter.className}>{children}</body>
    </html>
  );
}
