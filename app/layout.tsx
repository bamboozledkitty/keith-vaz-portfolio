import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Keith Vaz",
    description: "A human in love with systems, innovating and automating.",
    metadataBase: new URL("https://keithvaz.xyz"),
    icons: {
        icon: [
            {
                url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>',
                type: 'image/svg+xml',
            }
        ],
    },
    openGraph: {
        title: "Keith Vaz",
        description: "A human in love with systems, innovating and automating.",
        url: "https://keithvaz.xyz",
        siteName: "Keith Vaz Portfolio",
        images: [
            {
                url: "/media/profile/profile-pic/IMG_5823.jpg",
                width: 1200,
                height: 630,
                alt: "Keith Vaz",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Keith Vaz",
        description: "A human in love with systems, innovating and automating.",
        images: ["/media/profile/profile-pic/IMG_5823.jpg"],
    },
};

import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
