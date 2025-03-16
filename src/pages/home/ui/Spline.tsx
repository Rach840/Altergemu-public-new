import React from "react";
import Spline from "@splinetool/react-spline";
import { useResize } from "@/src/shared/hooks/useResize";

export default function SplineBlock() {
	const { isScreenMd, isScreenSm } = useResize();
	return (
		<div
			onMouseMove={(e) => e.preventDefault()}
			style={{
				zIndex: 50,
				overflow: "hidden",
				height: !isScreenMd ? "430px" : "650px",
			}}
		>
			{!isScreenMd ? (
				<Spline
					scene="https://prod.spline.design/RAZc0QtUoFzn8Qav/scene.splinecode"
					style={{
						width: !isScreenSm ? "100%" : "450px",
						height: "450px",
						left: !isScreenSm ? "-5%" : "",
						position: !isScreenSm ? "relative" : "static",
						margin: !isScreenSm ? "" : "0 auto",
					}}
					className="spline"
				/>
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
