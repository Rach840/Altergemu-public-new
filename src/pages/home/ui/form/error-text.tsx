import { cn } from "@/src/shared/utils/utils";
import React from "react";


export const ErrorText = ({
	text,
	className,
}: {
	text: string;
	className?: string;
}) => {
	return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};
