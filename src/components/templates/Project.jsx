import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../atoms/Button";
import ProjectDetails from "../organisms/ProjectDetails";
import ProjectContext from "../../contexts/ProjectContext";

export const Project = ({ title, image = null, video = null, body, github = null, stack, onClick, href = null, website = null, awards = null, achievements = null, variant = "default", themes = [], scenarios = [] }) => {

	const { t } = useTranslation()
	const [feature, setFeature] = useState(null);
	const isMobile = window.innerWidth < 768

	const [option, setOption] = useState({
		theme: null,
		scenary: null
	})

	let children = null;

	if (variant === "helios") {

		useEffect(() => {
			onClick && onClick();
		}, [option.scenary]);

		const handleTheme = (element) => {
			setOption({ ...option, theme: element });
		}

		children = (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className={"flex flex-col w-full justify-center items-center gap-6 md:gap-6"}
				onClick={() => {
					if (!isMobile) {
						const id = 'project-list';
						const yOffset = -50;
						const element = document.getElementById(id);
						const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

						window.scrollTo({ top: y, behavior: 'smooth' });
					}
				}}
			>
				<div className="flex flex-col justify-between gap-4 md:flex-grow">
					<div className="flex flex-col justify-between gap-2">
						<div className="flex flex-row flex-wrap justify-center gap-4">
							<h2 className="text-3xl font-bold py-2">
								{title}
							</h2>
							{awards &&
								<div className="flex gap-2 justify-center">
									{awards.map((award, index) => {
										return <div
											key={index}
											className="w-fit h-fit text-md md:text-sm bg-[#2157AA] dark:bg-[#1B4789FF] gap-2 text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center items-center flex-col md:flex-row"
											onClick={() => window.open(award.url, "_blank")}>
											<span className="font-[500] md:text-md text-sm">
												{award.title}
											</span>
											{award.record && <div className="text-xs px-2 py-1 bg-[#f1f1f1] text-[#2157AA] dark:bg-[#f1f1f1] rounded dark:text-[#1B4789FF] font-[500]">
												{award.record.amount + " " + award.record.title}
											</div>}
										</div>
									})}
								</div>
							}
						</div>
					</div>
				</div>

				<ProjectDetails
					title={title}
					image={image}
					body={
						option.theme ?
							<div className="flex flex-row gap-2 justify-center items-center flex-wrap max-w-[300px] self-center">
								{themes.map((element, index) => {
									let isActive = option.theme?.id == element.id

									return element.type == 1 ?
										<Button
											key={index}
											onClick={() => handleTheme(element)}
											icon={
												<div style={{ backgroundColor: element.color }}
													className="w-4 h-4 rounded-full border border-slate-500" />
											}
											variant={isActive ? "small" : "secondary-small"}
										/> :
										<span className="font-[400] text-[10px] opacity-70">La interfaz es completamente personalizable 🖌️</span>
								})}
							</div>
							:
							body
					}
					github={github}
					stack={stack}
					website={website}
					awards={awards}
					achievements={achievements}
					features={option.scenary?.features || []}
					option={option}
					scenarios={scenarios}
					themes={themes}
					setOption={setOption}
					variant={"modern"}
				/>

			</motion.div>
		)
	} else {
		children = (
			<motion.div
				animate={{ opacity: 1 }} initial={{ opacity: 0 }}
				className={"flex gap-4 flex-col w-full justify-center p-4 items-center gap-2 md:gap-12"}
			>

				<div className="flex flex-col justify-between gap-2 md:flex-grow">
					<h2 className="text-5xl font-bold py-2 w-full">{title}</h2>
					<p className="font-[500] text-lg md:text-lg opacity-70">{body}</p>
				</div>

				<ProjectDetails
					title={title}
					image={image}
					body={body}
					github={github}
					stack={stack}
					website={website}
					awards={awards}
					achievements={achievements}
					variant={variant}
				/>

				{onClick &&
					<Button title={t("project_back")} onClick={onClick} />
				}

			</motion.div>
		)
	}


	return <ProjectContext.Provider value={{ feature, setFeature, option, setOption }}>
		{children}
	</ProjectContext.Provider>;
}