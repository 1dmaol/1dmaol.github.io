import { useEffect, useState } from "react"
import { currentAboutHeight, currentProjectsHeight } from "../consts/sizes"
import { useTranslation } from "react-i18next"

export const Header = () => {

    const { t } = useTranslation()

    return (
        <header className="flex justify-between items-center absolute md:left-20 md:right-20 px-8">
            <a href="https://1dmaol.github.io/">
                <img
                    className="rounded-full w-20 h-22 hover:scale-110 transition"
                    src={new URL('../assets/mepp.png', import.meta.url).href}
                    alt="logo" />
            </a>

            <nav className="flex flex-row gap-x-20 hidden md:flex">
                <a className="text-xl hover:scale-110 transition cursor-pointer font-[500]" onClick={() => window.scrollTo({ top: currentProjectsHeight, behavior: 'smooth' })}>{t('projects')}</a>
                <a className="text-xl hover:scale-110 transition cursor-pointer font-[500]" onClick={() => window.scrollTo({ top: currentAboutHeight, behavior: 'smooth' })}>{t('about')}</a>
            </nav>

        </header>
    )
}