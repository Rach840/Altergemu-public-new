"use client";
import React, { useState, useEffect } from "react";
import type { User } from "@/src/db/schema";
import ProjectCarousel from "./project-carousel";
import Team from "@/src/pages/home/ui/Team";
import SendForm from "@/src/pages/home/ui/form/send-form";
import TeamSkeleton from "@/src/pages/home/ui/Team-skeleton";
import SplineBlock from "@/src/pages/home/ui/Spline";
export default function HomeMobilePage() {
	const [team, setTeam] = useState<User[]>([]);
	useEffect(() => {
		(async () => {
			const teamResponse: Response = await fetch("/api/team");
			const team = await teamResponse.json();
			if (Array.isArray(team) && team.length > 0) {
				setTeam(team);
			}
		})();
	}, []);

	return (
		<div className="bg-gray-900 min-h-screen pb-10">
			{/* Hero Section */}
			<div className=" pb-11">
				<div className=" z-30 relative pt-20 container  mx-auto pb-10">
					<SplineBlock />
					<div className="text-center  mb-8">
						<h1 className="text-balance text-4xl font-semibold tracking-tight text-green-400 revealed">
							Команда разработки Altergemu
						</h1>
					</div>
					<div className="text-center ">
						<h2 className="mt-4 text-pretty text-lg font-medium text-green-400 revealed">
							Команда разработчиков-профессионалов, разрабатывающая широкий спектр
							продуктов, начиная от сайтов и игр, заканчивая системой контроля версий
						</h2>
					</div>
				</div>
			</div>

			{/* About Section */}
			<div className="px-4 py-8">
				<div className="mt-8 bg-gray-800 rounded-xl p-6">
					<h2 className="text-center text-3xl font-bold text-green-400 mb-4">
						О команде
					</h2>
					<p className="text-white text-base">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
						consectetur fugiat natus quasi officiis nam quia, hic, rem eveniet nobis
						quis fugit facilis obcaecati eos impedit ipsam accusamus dolorum velit
						eligendi doloremque? Voluptates, maiores.
					</p>
					<div className="mt-4 flex justify-center">
						<img
							src=".././team.jpg"
							className="h-48 rounded-lg object-cover"
							alt="Team"
						/>
					</div>
				</div>
			</div>

			{/* Projects Section */}
			<div className="px-4 py-8">
				<div className="bg-gray-800 rounded-xl pt-6  sm:p-4">
					<h3 className="text-green-400 text-3xl mb-3 font-bold text-center">
						Наши Проекты
					</h3>
					<ProjectCarousel />
				</div>
			</div>

			{/* Team Section */}
			<div className="px-4 py-8">
				<div className="w-full mx-auto bg-gray-800 py-4 rounded-xl mb-6">
					<h3 className="text-green-400 text-3xl font-bold text-center">
						Участники
					</h3>
				</div>

				<div className="flex flex-col items-center gap-6">
					{team.length > 0 ? <Team team={team} /> : <TeamSkeleton />}
				</div>
			</div>

			{/* Join Section */}
			<div className="px-4 py-8">
				<div className="bg-gray-800 rounded-xl py-8 px-4 relative">
					<h3 className="text-green-400 text-3xl mb-6 font-bold text-center">
						Попробуй себя в Altergemu
					</h3>
					<div className="flex justify-center">
						<SendForm />
					</div>
				</div>
			</div>
		</div>
	);
}
