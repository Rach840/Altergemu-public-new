import React from "react";
import { cn } from "@/src/shared/utils/utils";

interface SpinnerProps {
	size?: "sm" | "md" | "lg" | "xl";
	color?: "primary" | "white" | "green";
	className?: string;
}

export function Spinner({
	size = "md",
	color = "primary",
	className,
}: SpinnerProps) {
	const sizeClasses = {
		sm: "h-4 w-4 border-2",
		md: "h-8 w-8 border-3",
		lg: "h-12 w-12 border-4",
		xl: "h-16 w-16 border-4",
	};

	const colorClasses = {
		primary: "border-t-indigo-500",
		white: "border-t-white",
		green: "border-t-green-400",
	};

	return (
		<div className={cn("flex justify-center items-center", className)}>
			<div
				className={cn(
					"animate-spin rounded-full border-solid border-gray-300",
					sizeClasses[size],
					colorClasses[color],
				)}
			/>
		</div>
	);
}

export function FullPageSpinner({
	color = "primary",
}: {
	color?: "primary" | "white" | "green";
}) {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
			<Spinner size="xl" color={color} />
		</div>
	);
}
