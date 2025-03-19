import React from "react";
import { useResize } from "@/src/shared/hooks/useResize";

export default function SplineBlock() {
	const { isScreenMd } = useResize();
	return (
		<div
			style={{
				zIndex: 50,
				overflow: "hidden",
				height: !isScreenMd ? "430px" : "650px",
			}}
		>
			{!isScreenMd ? (
				<img src="./cubic-mobile.gif" className="mx-auto" alt="" />
			) : (
				<img src="./cubic-desk.gif" className="w-[650px] h-[650]" alt="" />
			)}
		</div>
	);
}
