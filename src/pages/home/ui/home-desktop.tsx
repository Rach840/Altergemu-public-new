"use client";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import React from "react";
import Threads from "@/src/shared/ui/Backgrounds/Threads";
import BlurText from "@/src/shared/ui/AnimationTexts/BlurText";
import Squares from "@/src/shared/ui/Backgrounds/Squares";
import ASCIIText from "@/src/shared/ui/AnimationTexts/ASCIIText";
import { User } from "@/src/db/schema";
import SplineBlock from "@/src/shared/ui/Spline";
import ProjectCarousel from "./project-carousel";
import Team from "@/src/pages/home/ui/Team";
import SendForm from "@/src/pages/home/ui/form/send-form";
import TeamSkeleton from "@/src/pages/home/ui/Team-skeleton";
import { useResize } from "@/src/shared/hooks/useResize";

export default function HomeDesktopPage() {
	const { isScreenMd, isScreenLg } = useResize();
	const [team, setTeam] = useState<User[]>([]);
	React.useEffect(() => {
		(async () => {
			const teamResponce: Response = await fetch("/api/team");
			const team = await teamResponce.json();
			if (Array.isArray(team) && team.length > 0) {
				setTeam(team);
			}
		})();
	}, []);
	return (
		<>
			<div className="bg-gray-900 mx-auto h-[100vh] px-2 pt-7 lg:pt-14  lg:px-8">
				<div
					style={{
						width: "100%",
						height: "100vh",
						zIndex: 40,
						left: 0,
						position: "absolute",
					}}
				>
					<Threads amplitude={1.6} distance={0.6} enableMouseInteraction={false} />
				</div>

				<div className="flex justify-between mt-14 flex-col-reverse lg:flex-row  w-11/12 mx-auto   items-center">
					<div className="w-6/12 xl:max-w-xl 2xl:max-w-3xl  ">
						<div className="block mb-7">
							<BlurText
								text="Команда разработки Altergemu"
								delay={30}
								animateBy="words"
								direction="top"
								threshold={0.1}
								className="text-balance text-3xl  sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold tracking-tight text-green-400 revealed"
							/>
						</div>
						<div className="block">
							<BlurText
								text="Команда разработчиков-профессионалов, разрабатывающая широкий спектр продуктов, начиная от сайтов и игр, заканчивая системой контроля версий"
								delay={30}
								animateBy="words"
								direction="top"
								threshold={0.1}
								className="mt-8 text-pretty text-lg sm:text-md lg: xl:text-lg 2xl:text-xl/8  font-medium text-green-400 revealed"
							/>
						</div>
					</div>

					<SplineBlock />
				</div>
			</div>
			<div className="-z-20 min-h-full w-full absolute">
				<Squares
					speed={0.2}
					squareSize={40}
					direction="diagonal" // up, down, left, right, diagonal
					borderColor="#fff"
					hoverFillColor="#222"
				/>
			</div>

			<div className="bg-opacity-0 z-40  h-full mb-6  py-10">
				<Fade damping={0.2} triggerOnce={true} cascade>
					<div className="container bg-gray-900 rounded-xl py-6 px-3 sm:py-6 lg:py-16 lg:px-36  mx-auto">
						<BlurText
							text="Команда Altergemu разрабатывает игры, платформы для тестирования, системы контроля версий и не только. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellat eius natus ab! Voluptatibus nisi labore deserunt quae, corrupti est? Aspernatur omnis quod reprehenderit eligendi"
							delay={30}
							animateBy="words"
							direction="top"
							threshold={0.1}
							className="text-xl sm:text-2xl lg:text-4xl text-green-400"
						/>
					</div>

					<div className="relative">
						<div
							style={{
								width: "94.4%",
								display: !isScreenLg ? "none" : "block",
							}}
							className="absolute top-4  xl:top-14 h-full bg-gray-800 -z-10 bottom-0"
						></div>
						<div className="flex container bg-gray-700 rounded-xl py-4 px-1 my-4 lg:bg-inherit  lg:p-0 mx-auto flex-col lg:flex-row justify-between items-center">
							<div className="  lg:w-6/12 px-3 lg:ml-12 ">
								<h2 className="text-center text-4xl lg:text-left lg:text-5xl xl:text-6xl font-bold text-green-400 mb-6">
									О команде
								</h2>
								<p className="text-lg text-white sm:text-xl lg:text-2xl">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
									consectetur fugiat natus quasi officiis nam quia, hic, rem eveniet
									nobis quis fugit facilis obcaecati eos impedit ipsam accusamus dolorum
									velit eligendi doloremque? Voluptates, maiores. Blanditiis nostrum
									harum soluta laudantium similique rerum architecto doloremque, nam
									accusamus sint. Aliquam explicabo beatae sit.
								</p>
							</div>
							<img src=".././team.jpg" className=" h-[50vh] w-3/12 " alt="" />
						</div>
					</div>
				</Fade>
			</div>

			<div className="  z-40 pt-4 lg:pt-8  mb-6">
				<Fade duration={400} triggerOnce={true}>
					<div className=" container mx-auto bg-gray-800 rounded-xl p-6 lg:p-14">
						<h3 className="text-green-400 text-4xl mb-3 font-bold text-center">
							Наши Проекты
						</h3>
						<ProjectCarousel />
					</div>
				</Fade>
			</div>

			<div className="  z-40 bg-transparent  mb-24">
				<div className="w-80 mx-auto bg-gray-800 py-4 rounded-xl">
					<h3 className="text-green-400   text-4xl font-bold  text-center">
						Участники
					</h3>
				</div>

				<div className="container mx-auto   place-items-center grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-y-5  md:gap-x-[120px]">
					{team != undefined ? <Team team={team} /> : <TeamSkeleton />}
				</div>
			</div>

			<div className="relative z-40 bg-transparent  mb-6">
				<div className="relative  container bg-gray-800 rounded-xl mx-auto py-14 sm:py-0 h-[30vh] sm:h-[60vh] flex flex-col">
					{!isScreenMd ? (
						<div className="">
							<h3 className="text-green-400 text-3xl   mb-3 font-bold text-center">
								Попробуй себя в Altergemu
							</h3>
						</div>
					) : (
						<ASCIIText
							text="Попробуй себя в Altergemu"
							enableWaves={true}
							asciiFontSize={5}
							planeBaseHeight={5}
							textFontSize={40}
							textColor="#2adb6a"
						/>
					)}

					<div className="  flex flex-col items-center h-full mb-14 justify-end   ">
						<SendForm />
					</div>
				</div>
			</div>
		</>
	);
}
