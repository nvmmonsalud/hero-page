import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Neil Vincent Monsalud | Portfolio",
    description: "Marketing Strategist & Photographer in Tokyo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
                    rel="stylesheet"
                />
            </head>
            <body className={inter.className}>
                <header className="nav">
                    <div className="nav-container">
                        <Link href="/" className="logo font-semibold text-lg no-underline text-black">
                            Neil Monsalud
                        </Link>
                        <ul className="nav-links">
                            <li>
                                <Link href="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/works" className="nav-link">
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
                {children}
                <footer className="text-center p-8 text-sm text-gray-600">
                    <p>© 2025 Neil Vincent Monsalud</p>
                </footer>
            </body>
        </html>
    );
}
