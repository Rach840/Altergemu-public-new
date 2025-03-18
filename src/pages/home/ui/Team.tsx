import React from "react";
import { Fade } from "react-awesome-reveal";
import { User } from "@/src/db/schema";
import TiltedCard from "@/src/shared/ui/TiltedCard";
import { useResize } from "../../../shared/hooks/useResize";
import SpotlightCard from "@/src/shared/ui/SpotlightCard";
import { Avatar } from "@mui/material";
import { MemberModile } from "./member-mobile";


export default function Team({ team }: { team: User[] }) {
	const { isScreenMd, isScreenLg } = useResize();
	if (isScreenLg) {
		return (
			<Fade
				cascade
				damping={0.2}
				triggerOnce={true}
				className=" pb-4  lg:w-[480px]  mx-3 lg:mx-0 text-center"
			>
				{team.map((item) => (
					<TiltedCard
						key={item.id}
						imageSrc={item.avatarUrl as string}
						altText={`${item.firstName} ${item.lastName}`}
						captionText={`${item.firstName} ${item.lastName}`}
						containerHeight={!isScreenMd ? "600px" : "500px"}
						containerWidth={!isScreenMd ? "400px" : !isScreenLg ? "300px" : "440px"}
						imageHeight={!isScreenMd ? "400px" : "300px"}
						imageWidth={!isScreenMd ? "400px" : !isScreenLg ? "300px" : "440px"}
						rotateAmplitude={8}
						scaleOnHover={1.05}
						showMobileWarning={false}
						showTooltip={true}
						displayOverlayContent={true}
						overlayContent={
							<SpotlightCard
								className="custom-spotlight-card absolute w-[400px] sm:w-[500px] top-[400px] md:top-[300px] md:w-[300px] lg:w-[435px] p-6"
								spotlightColor="rgba(0, 229, 255, 0.2)"
							>
								<h2 className="text-2xl text-white font-bold mb-2">
									{item.firstName} {item.lastName}
								</h2>
								<p className="text-blue-400 mb-4">
									{item.devStatus ? item.devStatus.split(",").join(", ") : ""}
								</p>
								<p className="text-gray-300">{item.bio}</p>
							</SpotlightCard>
						}
					/>
				))}
			</Fade>
		);
	} else {
		return (
			<div className="pb-4 md:w-[480px] grid grid-cols-2 gap-6  mx-3 lg:mx-0 text-center">
				{team.map((item) => (
					<MemberModile member={item} > 
					 <div  className="bg-gray-800 col-span-1 p-4 rounded-lg overflow-hidden shadow-lg">
					<div className=" py-2 overflow-hidden">
						<Avatar alt={item.firstName} className="size-20 mx-auto" src={item.avatarUrl as string} />
				
					</div>
				
						<h2 className="text-xl font-bold mb-2">
							{item.firstName} {item.lastName}
						</h2>
						<p className="text-blue-400 text-sm mb-4">
							{item.devStatus ? item.devStatus.split(",").join(", ") : ""}
						</p>
					
				</div>
				</MemberModile>
				))}
			</div>
		);
	}
}
