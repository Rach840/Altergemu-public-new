"use client";
import React from "react";
import { useResize } from "@/src/shared/hooks/useResize";
import HomeDesktopPage from "@/src/pages/home/ui/home-desktop";
import HomeMobilePage from "@/src/pages/home/ui/home-mobile";
import { FullPageSpinner } from "@/src/shared/ui/spinner";

export function HomePage() {
	const { isScreenLg } = useResize();

	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<div className="h-screen w-full flex items-center justify-center">
				<FullPageSpinner color="green" />
			</div>
		);
	}

	return isScreenLg ? <HomeDesktopPage /> : <HomeMobilePage />;
}
