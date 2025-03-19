import React from "react";
import { Fade } from "react-awesome-reveal";
import { User } from "@/src/db/schema";
import { useResize } from "../../../shared/hooks/useResize";
import { MemberModile } from "./member-mobile";

export default function Team({ team }: { team: User[] }) {
	const { isScreenMd, isScreenLg } = useResize();
	if (isScreenLg) {
		return (
			<div className="container mx-auto  mt-6 place-items-center grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-y-5  md:gap-x-[60px] ">
				<Fade
					cascade
					damping={0.2}
					triggerOnce={true}
					className=" pb-4  col-span-1 h-full w-full   mx-3 lg:mx-0 text-center"
				>
					{team.map((item) => (
						<MemberModile member={item}>
							<div className="bg-gray-800 cursor-pointer h-full transition-transform duration-300 ease-in-out hover:scale-105 p-4 rounded-lg overflow-hidden shadow-lg">
								<div className=" py-2 overflow-hidden">
									<img
										alt={item.firstName}
										className=" size-32 rounded-[50%] mx-auto"
										src={item.avatarUrl as string}
									/>
								</div>

								<h2 className="text-2xl font-bold mb-2">
									{item.firstName} {item.lastName}
								</h2>
								<p className="text-blue-400 text-md mb-4">
									{item.devStatus ? item.devStatus.split(",").join(", ") : ""}
								</p>
							</div>
						</MemberModile>
					))}
				</Fade>
			</div>
		);
	} else {
		return (
			<div className="pb-4 md:w-[480px] grid grid-cols-2 gap-6  mx-3 lg:mx-0 text-center">
				{team.map((item) => (
					<MemberModile member={item}>
						<div className="bg-gray-800 col-span-1 p-4 rounded-lg overflow-hidden shadow-lg">
							<div className=" py-2 overflow-hidden">
								<img
									alt={item.firstName}
									className="size-20 mx-auto"
									src={item.avatarUrl as string}
								/>
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
