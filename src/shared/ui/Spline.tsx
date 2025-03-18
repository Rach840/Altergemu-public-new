import React from "react";
import Spline from "@splinetool/react-spline";
import { useResize } from "@/src/shared/hooks/useResize";

export default function SplineBlock() {
	const { isScreenMd, isScreenSm } = useResize();
	return (
		<div
			style={{
				zIndex: 50,
				overflow: "hidden",
				height: !isScreenMd ? "430px" : "650px",
			}}
		>
			{!isScreenMd ? (
				<img src="./cubic.gif" className="mx-auto" alt="" />
			) : (
				<Spline
					scene="https://prod.spline.design/m4LY1JZtHyIpXq4g/scene.splinecode"
					className="spline"
					style={{
						width: "650px",
						height: "650px",
					}}
				/>
			)}
			<style>{`
							.spline canvas{
							position:relative;
							}
							`}</style>
		</div>
	);
}
