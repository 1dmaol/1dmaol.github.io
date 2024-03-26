import { useTranslation } from "react-i18next"
import AnimatedText from "./basics/AnimatedText"
import { GitHub } from "./basics/GitHub"
import { LinkedIn } from "./basics/LinkedIn"

export const Who = () => {
    const { i18n, t } = useTranslation()

    return (
        <section className="w-full h-screen md:h-dvh flex items-center justify-center flex-col gap-10">
            <AnimatedText className="text-8xl font-bold text-start md:text-center" text={"Marc Oller Caballé".split('')} />
            <AnimatedText className="text-3xl font-bold text-start md:text-center" text={t('subtitle').split('')} />
            
            <div className="flex flex-row text-3xl gap-4">
                <div className="hover:scale-110 transition hover:cursor-pointer" title={t('es')} onClick={() => {i18n.changeLanguage('es')}}>🇪🇸</div>
                <div className="hover:scale-110 transition hover:cursor-pointer" title={t('en')} onClick={() => {i18n.changeLanguage('en')}}>☕️</div>
                <div className="hover:scale-110 transition hover:cursor-pointer" title={t('vl')} onClick={() => {i18n.changeLanguage('vl')}}>🥘</div>
            </div>

            <div className="flex flex-row">
                <GitHub namespace="1dmaol" />
                <LinkedIn />
            </div>
        </section>
    )
}