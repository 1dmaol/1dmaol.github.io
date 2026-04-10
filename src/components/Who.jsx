import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
import { DiJava, DiJavascript, DiReact } from "react-icons/di";
import AnimatedText from "./atoms/AnimatedText";
import { GitHub } from "./atoms/GitHub";
import { LinkedIn } from "./atoms/LinkedIn";
import { Button } from "./atoms/Button";

export const Who = () => {
	const { t } = useTranslation()

	return (
		<section className="w-full h-[calc(100vh-80px)] md:h-[calc(100vh-140px)] flex items-center justify-center flex-col gap-8">
			<div className="flex flex-col gap-4 items-center">
				<AnimatedText className="text-8xl font-bold text-start md:text-center" text={"Marc Oller Caballé".split('')} />
				<AnimatedText className="text-3xl font-bold text-start md:text-center text-slate-400" text={(t('subtitle')).split('')} />
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} className="md:relative md:-top-[250px] md:-right-[355px] font-[500] bg-slate-600 text-[#f1f1f1] text-lg md:text-xl font-medium mr-2 px-2.5 py-1 md:px-2.5 md:py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 md:animate-bounce">Freelancer</motion.div>

				<div className="flex flex-row gap-4">
					<DiJavascript size={36} />
					<DiJava size={36} />
					<DiReact size={36} />
				</div>
			</div>
			<div className="flex flex-col gap-4 items-center">
				<div className="flex flex-row text-3xl gap-4">
					<div className="hover:scale-110 transition hover:cursor-pointer" title={t('es')} onClick={() => { history.pushState(null, null, "?locale=es"); location.reload() }}>🏠</div>
					<div className="hover:scale-110 transition hover:cursor-pointer" title={t('en')} onClick={() => { history.pushState(null, null, "?locale=en"); location.reload() }}>☕️</div>
					<div className="hover:scale-110 transition hover:cursor-pointer" title={t('vl')} onClick={() => { history.pushState(null, null, "?locale=vl"); location.reload() }}>🥘</div>
				</div>

				<div className="flex flex-row">
					<GitHub namespace="1dmaol" />
					<LinkedIn />
				</div>

				<a
					href={
						(() => {
							const url = new URL(window.location.href);
							url.searchParams.set("action", "contact-mail");
							return url.toString();
						})()
					}
				>
					<Button title={t('contact')} />
				</a>
			</div>
		</section>
	)
}