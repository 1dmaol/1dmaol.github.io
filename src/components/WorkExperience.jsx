import { useEffect, useState } from "react"
import FadeInSection from "./basics/FadeInSection"
import { Section } from "./basics/Section"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export const WorkExperience = () => {
    const { t } = useTranslation()

    const quotes = [
        t("about_quote1"),
        t("about_quote2"),
        t("about_quote3"),
        t("about_quote4"),
        t("about_quote5"),
    ]

    const sections = [
        {
            index: 1,
            title: "Indra Studios (" + t('london') + ")",
            position: "5️⃣",
            role: t("subtitle"),
            year: "2018 - 2019",
            achievements: [{
                name: t("app_developer_degree"),
                url: "https://todofp.es/que-estudiar/loe/informatica-comunicaciones/des-aplicaciones-multiplataforma.html",
                type: "🎓"
            }],
            quote: quotes[0]
        },
        {
            index: 2,
            title: t('side_project_role'),
            position: "4️⃣",
            role: t("subtitle"),
            year: "2019 - 2022",
            achievements: [{
                name: t("project_developer_role"),
                url: "https://www.linkedin.com/in/marc-oller/details/projects/",
                type: "🧑🏻‍💻"
            }],
            quote: quotes[1]
        },
        {
            index: 3,
            title: "IIM - Universistat Politecnica de València",
            position: "3️⃣",
            role: t("researcher_role") + " - " + t("subtitle"),
            year: "2021 - 2022",
            achievements: [{
                name: t("it_degree"),
                url: "https://www.upv.es/titulaciones/GTI/",
                type: "🎓"
            }, {
                name: t("best_tfg") + " (iDrill)",
                url: "https://www.linkedin.com/feed/update/urn:li:activity:7026505574502514688/",
                type: "🥇"
            }],
            quote: quotes[2]
        },
        {
            index: 4,
            position: "2️⃣",
            title: "Panel Sistemas Informáticos",
            role: t("backend_role"),
            year: "2022 - 2024",
            quote: quotes[3]
        },
        {
            index: 5,
            title: t("independent_role"),
            position: "1️⃣",
            role: t("subtitle"),
            year: "2023 - " + t("currently"),
            achievements: [{
                name: t("project_enso_title"),
                url: "https://enso-prototype.onrender.com/",
                type: "🧑🏻‍💻"
            }, {
                name: t("project_viking_title"),
                url: "https://vikingcentro.com/",
                type: "🧑🏻‍💻"
            }],
            quote: quotes[4]
        },
        {
            index: 6,
            title: "Entornos de Formación (EdF)",
            position: "1️⃣",
            role: t("subtitle"),
            year: "2024 - " + t("currently"),
            quote: quotes[4]
        }
    ]

    const [isVisible, setVisible] = useState(false);

    const isMobile = window.innerWidth < 768
    const journeyCardHeight = 140;
    const height = isMobile ? sections * journeyCardHeight : 210

    const [selected, setSelected] = useState(sections[0])
    const [quote, setQuote] = useState("")
    const [isAnimating, setAnimating] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoReplay, setAutoReplay] = useState(true);
    const [currentTimeout, setCurrentTimeout] = useState(null);

    const ANIM_DURATION = .3;

    useEffect(() => {
        if (!autoReplay || isMobile) return;
        setCurrentTimeout(setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % sections.length);
            setSelected(sections[currentIndex])
            if (currentIndex === 0) {
                document.getElementById("journey").scrollTo({
                    left: 0,
                    behavior: 'smooth'
                })
            } else if (currentIndex === 1) {
                document.getElementById("journey").scrollTo({
                    left: 350,
                    behavior: 'smooth'
                })
            }
        }, ANIM_DURATION * 8000));
    }, [currentIndex])

    return (
        <section
            id="about"
            className="w-full h-dvh md:h-full"
            isVisible={isVisible}
            setVisible={setVisible}
        >
            <div
                className="flex flex-col items-center justify-center flex-col gap-8"
            >

                <h2 id="about" className="text-3xl font-bold">{t('about')}</h2>

                <span>
                    {t('about_title')}
                    <br />
                    <br />
                    {t('about_subtitle')}
                </span>
                <ul id="journey" className="flex gap-4 flex-col md:pl-8 border-l-2 border-gray-400">
                    {sections.reverse().map((section) => {
                        let isSelected = selected.index === section.index
                        return (
                            <li className={"py-4 px-6 w-fit md:w-[750px] md:mx-auto"} key={section.index}>
                                <div className="w-4 h-4 relative -ml-8 md:-ml-16 bg-gray-800 rounded-full dark:bg-gray-400" />
                                <div className={"px-4 md:px-10 py-4 md:py-6 bg-gray-200 -mt-6 rounded-lg dark:bg-gray-700 transition-all duration-300 " + (isSelected ? " md:scale-105" : "")}>
                                    <div className="mb-2 flex text-xs md:text-sm flex-row justify-between">
                                        <p class="opacity-75">{section.year}</p>
                                        <p class="opacity-75 font-[500]">{section.title}</p>
                                    </div>
                                    <h1 class="font-bold text-2xl text-start">{section.role}</h1>

                                    {section.achievements &&
                                        <div className="flex flex-col md:flex-row text-white py-2 gap-2 md:gap-4 items-center">
                                            {section.achievements.map((achievement, index) => {
                                                return <a className="hover:scale-105 transition text-xs md:text-sm bg-gray-800 p-2 rounded-lg" href={achievement.url} target="_blank" key={index}>{achievement.type} {achievement.name}</a>
                                            })}
                                        </div>}
                                    <p class="text-start opacity-75 mt-2 text-[14px]">{
                                        isSelected ? section.quote : section.quote}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}