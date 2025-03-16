import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/app/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Altergemu",
	description:
		"Altergemu developers company - профессиональная команда разработчиков",
	applicationName: "Altergemu",
	authors: [{ name: "Altergemu Team" }],
	keywords: ["development", "team", "altergemu", "developers", "programming"],
};

export function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} dark ${geistMono.variable} antialiased`}
			>
				<div className="relative h-full overflow-hidden ">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
