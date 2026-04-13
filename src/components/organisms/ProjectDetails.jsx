import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Achievements } from "../molecules/Achievements";
import { Tag } from "../atoms/Tag";
import { Button } from "../atoms/Button";
import { ImageWithFallback } from "../../utils/imageLoader";
import ProjectContext from "../../contexts/ProjectContext";

const ProjectDetails = ({ title, image = null, video = null, body, github = null, stack = [], onClick, href = null, website = null, awards = null, achievements = [], features = [], variant = "default", option, scenarios = [], themes = [], setOption }) => {
	const { t } = useTranslation();
	const initialImage = achievements?.[0]?.image || image || "";
	const [src, setSrc] = useState(initialImage);
	const { feature } = useContext(ProjectContext)

	const handleScenary = (scenary) => {
		let _option = option;

		if (!scenary) {
			_option["theme"] = null
		} else if (!option.theme) {
			_option["theme"] = themes[0]
		}

		_option = { ..._option, scenary: scenary };
		setOption(_option)
	}


	switch (variant) {
		case "modern":
			if (!option.theme || !option.scenary) {
				return (<div className="flex flex-col gap-4">
					<ProjectDetails
						title={title}
						image={image}
						body={body}
						github={github}
						stack={stack}
						website={website}
						awards={awards}
						achievements={achievements}
						option={option}
						variant="simple"
					/>

					<p className="font-[500] text-md md:text-md opacity-70">
						Selecciona un tema para ver más información sobre el proyecto
					</p>

					<ScenariosSelector scenarios={scenarios} handleScenary={handleScenary} option={option} />

					<TagStack stack={stack} highlightedStack={stack} />
				</div>)
			}

			return (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="flex flex-col md:flex-row gap-4 md:gap-16 md:w-full items-center">
					<div className="flex flex-col w-full justify-between gap-4 md:gap-4">
						<div className="flex flex-col justify-between gap-2 md:gap-2">
							<p className="font-bold text-md md:text-lg">
								{option?.scenary?.title}
							</p>
							<p className={"font-[500] text-[14px] md:text-[14px] opacity-70"}>
								{option?.scenary?.subtitle}
							</p>
						</div>

						{body}

						{achievements && achievements.length > 0 &&
							<Achievements
								variant={"modern"}
								achievements={features}
								changeImage={setSrc}
							/>
						}

						{github && <GitHub type="forks" size="large" namespace={github.namespace} repo={github.repo} />}

						{website &&
							<div onClick={() => window.open(website, "_blank")} className={"w-fit h-fit text-sm bg-[#374151] dark:bg-[#374151] text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center"}>
								{t('go_to_website')}
							</div>
						}
						<ScenariosSelector scenarios={scenarios} handleScenary={handleScenary} option={option} />

						<TagStack stack={stack} highlightedStack={option.scenary && option.scenary?.stack} />
					</div>

				</motion.div>
			)
		case "simple":
			return (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="flex flex-col gap-4 md:gap-6 md:w-full items-center">
					<p className={"font-[500] text-md md:text-md opacity-70"}>
						{body}
					</p>
					<div className="flex flex-col-reverse md:flex-row gap-4 md:gap-16 md:w-full items-center">


						{achievements && <Achievements achievements={achievements} changeImage={setSrc} />}

						{achievements && image ?
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
								<ImageWithFallback 
									src={src} 
									key={src}
									alt="preview" 
									className={`flex h-[250px] min-w-[525px] md:h-[400px] md:w-[550px] md:aspect-[16/10] items-center align-center self-start rounded-xl object-contain md:object-fill`} 
								/>
							</motion.div>
							:
							video && <video className="h-[250px] md:h-[350px] md:w-[500px] aspect-[16/10] items-center align-center rounded-lg object-contain md:object-fill" src={video} controls />
						}
					</div>
				</motion.div>
			)
		default:
			return (
				<div className="flex flex-col-reverse md:flex-row gap-4 md:gap-16 md:w-full items-center">
					<div className="flex flex-col justify-between gap-4 md:gap-8 md:flex-grow">
						{achievements && <Achievements achievements={achievements} changeImage={setSrc} />}

						{github && <GitHub type="forks" size="large" namespace={github.namespace} repo={github.repo} />}

						{website &&
							<div className={"w-fit h-fit text-sm bg-[#374151] dark:bg-[#374151] text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center"} onClick={() => window.open(website, "_blank")}>
								{t('go_to_website')}
							</div>
						}

						{awards &&
							<div className="flex gap-2 flex-wrap justify-center">
								{awards.map((award, index) => (
									<div key={index} className="w-fit h-fit text-md md:text-sm bg-[#2157AA] dark:bg-[#1B4789FF] gap-2 text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center items-center flex-col md:flex-row" onClick={() => window.open(award.url, "_blank")}>
										<span className="font-[500] md:text-md text-sm">{award.title}</span>
										{award.record && <div className="text-xs px-2 py-1 bg-[#f1f1f1] text-[#2157AA] dark:bg-[#f1f1f1] rounded dark:text-[#1B4789FF] font-[500]">{award.record.amount + " " + award.record.title}</div>}
									</div>
								))}
							</div>
						}

						<div className="flex gap-2 flex-wrap justify-center">
							{(stack || []).map((tag, index) => <Tag key={index} title={tag} />)}
						</div>
					</div>

					{achievements && image ?
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
							<ImageWithFallback 
								src={src} 
								key={src}
								alt="preview" 
								className={`flex h-[250px] min-w-[525px] md:h-[400px] md:w-[550px] md:aspect-[16/10] items-center align-center self-start rounded-xl object-contain md:object-fill`} 
							/>
						</motion.div>
						:
						video && <video className="h-[250px] md:h-[350px] md:w-[500px] aspect-[16/10] items-center align-center rounded-lg object-contain md:object-fill" src={video} controls />
					}
				</div>
			)
	}
}

const TagStack = ({ stack = [], highlightedStack = [] }) => {
	return (
		<div className="flex gap-2 flex-wrap justify-center">
			{
				stack.map((tag, index) => {
					let isActive = highlightedStack?.includes(tag)
					return <Tag key={index}
						title={tag}
						className={isActive ? "" : "opacity-50"} />;
				})
			}
		</div>

	)
}

const ScenariosSelector = ({ scenarios = [], handleScenary = () => { }, option }) => {
	const { feature: selected, setFeature: setSelected } = useContext(ProjectContext)

	return <div className="flex gap-2 flex-wrap justify-center">
		{
			selected ?
				<Button
					title="Volver"
					onClick={() => setSelected(null)}
					variant="primary"
				/> :
				scenarios.map((scenary, index) => {
					return <Button
						key={index}
						title={scenary.title}
						onClick={() => option.scenary?.index != scenary.index ? handleScenary(scenary) : handleScenary(null)}
						variant={option.scenary?.index == scenary.index ? "primary" : "secondary"}
					/>;
				})
		}
	</div>
}

export default ProjectDetails;