import { useTranslation } from "react-i18next"
import AnimatedText from "./basics/AnimatedText"
import { GitHub } from "./basics/GitHub"
import { LinkedIn } from "./basics/LinkedIn"
import { motion } from "framer-motion";

export const Who = () => {
    const { i18n, t } = useTranslation()

    return (
        <section className="w-full h-[calc(100vh-120px)] md:h-dvh flex items-center justify-center flex-col gap-10">
            <AnimatedText className="text-8xl font-bold text-start md:text-center" text={"Marc Oller Caballé".split('')} />
            <AnimatedText className="text-3xl font-bold text-start md:text-center text-slate-400" text={(t('subtitle')+" | React | React Native | Spring Boot").split('')} />
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: 1}} className="md:absolute md:top-1/3 md:right-[630px] font-[500] bg-slate-600 text-[#f1f1f1] text-lg md:text-xl font-medium mr-2 px-2.5 py-1 md:px-2.5 md:py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 md:animate-bounce">Freelancer</motion.div>
            
            <div className="flex flex-row text-3xl gap-4">
                <div className="hover:scale-110 transition hover:cursor-pointer" title={t('es')} onClick={() => {history.pushState(null, null, "?locale=es"); location.reload()}}>🏠</div>
                <div className="hover:scale-110 transition hover:cursor-pointer" title={t('en')} onClick={() => {history.pushState(null, null, "?locale=en"); location.reload()}}>☕️</div>
                <div className="hover:scale-110 transition hover:cursor-pointer" title={t('vl')} onClick={() => {history.pushState(null, null, "?locale=vl"); location.reload()}}>🥘</div>
            </div>

            <div className="flex flex-row">
                <GitHub namespace="1dmaol" />
                <LinkedIn />
            </div>
        </section>
    )
}