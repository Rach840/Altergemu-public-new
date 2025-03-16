"use client";
import React from "react";
import { useResize } from "@/src/shared/hooks/useResize";
import HomeDesktopPage from "@/src/pages/home/ui/home-desktop";
import HomeMobilePage from "@/src/pages/home/ui/home-mobile";

export function HomePage() {
	const { isScreenLg } = useResize();

	// Use isScreenLg from useResize hook to determine which version to render
	return isScreenLg ? <HomeDesktopPage /> : <HomeMobilePage />;
}
