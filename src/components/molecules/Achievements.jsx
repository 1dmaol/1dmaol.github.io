import React, { useContext, useEffect, useRef, useState } from "react"
import { Button } from "../atoms/Button"
import { BentoCard, BentoGrid } from "../ui/bento-grid"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { motion, useCycle } from "framer-motion"
import { ImageWithFallback } from "../../utils/imageLoader"
import ProjectContext from "../../contexts/ProjectContext"

export const Achievements = ({ title = null, subtitle = null, achievements, changeImage = () => { }, variant = "default" }) => {
	switch (variant) {
		case "modern":
			return <AchievementsModern title={title} subtitle={subtitle} achievements={achievements} />
		default: return <AchievementsAccordion achievements={achievements} changeImage={changeImage} />
	}
}

const AchievementsModern = ({ title = null, subtitle = null, achievements }) => {
	const { feature: selected, setFeature: setSelected, option } = useContext(ProjectContext)

	const [opacity, setOpacity] = useState(1);
	const [selectedFeature, setSelectedFeature] = useState(null);

	useEffect(() => {
		if (!selected) {
			setOpacity(0);
			setTimeout(() => {
				setSelectedFeature(null);
				setOpacity(1);
			}, 250);
			return;
		}

		setOpacity(0);
		setTimeout(() => {
			setSelectedFeature(selected);
			setOpacity(1);
		}, 250);
	}, [selected]);

	return <motion.div
		className="flex flex-col items-center justify-center w-full gap-4 min-h-[40vh]"
		initial={{ opacity: 0 }}
		animate={{ opacity: opacity }}
		transition={{ duration: .1 }}>
		{
			selectedFeature ?
				<div
					className={"flex flex-col flex-grow items-center justify-center w-full my-4 rounded-xl h-full " +
						// light styles
						"bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] " +
						// dark styles
						"dark:bg-background transform-gpu dark:bg-slate-800 shadow-lg"}
				>
					<div className="flex flex-col md:flex-row gap-6 items-center justify-center">
						<div className="flex flex-col flex-grow justify-between p-4">
							<div className="flex flex-col flex-grow h-full gap-2 items-center">
								<p className="font-bold text-md md:text-lg">
									{selectedFeature.name}
								</p>
								<p className={"font-[500] text-[14px] md:text-[14px] opacity-70"}>
									{selectedFeature.advancedDescription || selectedFeature.description}
								</p>
							</div>
						</div>
						{(selectedFeature.img || selectedFeature.imageKey) && <ImageWithFallback src={selectedFeature.imageKey ? option?.theme?.images[selectedFeature.imageKey] : selectedFeature.img} alt={selectedFeature.name} className="w-full md:min-w-[32.5vw] md:max-w-[45.5vw] min-h-[250px] md:h-full object-cover md:object-contain rounded-md" />}
					</div>
				</div>
				:
				<BentoGrid>
					{achievements.map((feature) => (
						<BentoCard 
						key={feature.name} 
						{...feature} 
						img={feature.imageKey ? option?.theme?.images[feature.imageKey] : feature.img}
						onClick={() => { setSelected(feature); }} />
					))}
				</BentoGrid>
		}
	</motion.div>
}

const AchievementsAccordion = ({ achievements = [], changeImage = () => { } }) => {
	const [selected, setSelected] = useState(null);

	return (
		<div className="w-full bg-slate-100 dark:bg-gradient-to-b dark:from-[#1F2836f1] dark:to-[#1F2836fe] dark:shadow-lg px-6 rounded-xl shadow-lg">
			{(achievements || []).map((achievement, index) => (
				<AccordionItem
					key={index}
					item={achievement}
					index={index}
					isSelected={selected === index}
					onToggle={() => {
						const next = selected === index ? null : index;
						setSelected(next);
						changeImage(achievement.image || "");
					}}
				/>
			))}
		</div>
	)
}

const AccordionItem = React.memo(({ item, isSelected, onToggle, index }) => {
	const contentRef = useRef(null);

	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;
		if (isSelected) {
			el.style.maxHeight = el.scrollHeight + "px";
		} else {
			el.style.maxHeight = "0px";
		}
	}, [isSelected]);

	return (
		<div className={index !== 0 ? "border-t border-slate-200 dark:border-slate-700" : ""}>
			<button onClick={onToggle} className="w-full flex md:text-lg text-md justify-between items-center py-4 md:py-5 text-slate-800 dark:text-slate-200">
				<span className="text-slate-900 dark:text-slate-100 font-[500]">{item.title}</span>
				<span className="text-slate-800 dark:text-slate-200 transition-transform duration-300">{isSelected ? <FaChevronUp /> : <FaChevronDown />}</span>
			</button>
			<div ref={contentRef} className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
				<div className="pb-5 text-md text-slate-500 dark:text-slate-400 px-2 text-start">
					{item.content}
				</div>
			</div>
		</div>
	)
});