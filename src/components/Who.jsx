import { useTranslation } from "react-i18next"
import AnimatedText from "./basics/AnimatedText"
import { GitHub } from "./basics/GitHub"
import { LinkedIn } from "./basics/LinkedIn"

export const Who = () => {
    const { i18n, t } = useTranslation()

    return (
        <section className="w-full h-screen md:h-dvh flex items-center justify-center flex-col gap-10">
            <AnimatedText className="text-8xl font-bold text-start md:text-center" text={"Marc Oller Caballé".split('')} />
            <AnimatedText className="text-3xl font-bold text-start md:text-center text-slate-400" text={(t('subtitle')+" | React | React Native | Springboot").split('')} />
            
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