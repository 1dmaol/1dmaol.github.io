import { useEffect, useState } from "react"
import FadeInSection from "./basics/FadeInSection"
import { Section } from "./basics/Section"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DiAndroid, DiAngularSimple, DiApple, DiAws, DiCode, DiDatabase, DiDocker, DiGit, DiGithubBadge, DiJava, DiMysql, DiOnedrive, DiPostgresql, DiPython, DiReact, DiUnitySmall } from "react-icons/di";
import { GitHub } from "./basics/GitHub";


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
            url: "https://indrastudios.com/",
            position: "5️⃣",
            role: t("subtitle"),
            description: t("we_description1"),
            stack: [
                { icon: DiJava, name: "Java" },
                { icon: DiReact, name: "React" },
                { icon: DiPostgresql, name: "PostgreSQL" }
            ],
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
            description: t("we_description2"),
            stack: [
                { icon: DiAndroid, name: "Android" },
                { icon: DiPython, name: "Python" },
                { icon: DiGithubBadge, name: "Github" },
                { icon: DiJava, name: "Java" },
                { icon: DiReact, name: "React" },
                { icon: DiUnitySmall, name: "Unity" },
                { icon: DiDatabase, name: "Database" },
                { icon: DiCode, name: "Code" }
            ],
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
            title: "IIM (UPV)",
            description: t('we_description3'),
            stack: [
                { icon: DiJava, name: "Java" },
                { icon: DiReact, name: "React" },
                { icon: DiUnitySmall, name: "Unity" },
                { icon: DiPostgresql, name: "PostgreSQL" }
            ],
            url: "https://iim.webs.upv.es/",
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
            title: "Panel Sistemas",
            description: t('we_description4'),
            stack: [
                { icon: DiJava, name: "Java" },
                { icon: DiPostgresql, name: "PostgreSQL" },
                { icon: DiOnedrive, name: "Cloud" },
                { icon: DiDocker, name: "Docker" },
                { icon: DiAws, name: "AWS" },
                { icon: DiGit, name: "Git" }
            ],
            url: "https://www.panel.es/",
            role: t("backend_role"),
            year: "2022 - 2024",
            quote: quotes[3]
        },
        {
            index: 5,
            title: t("independent_role"),
            position: "1️⃣",
            role: t("subtitle"),
            description: t('we_description5'),
            stack: [
                { icon: DiAndroid, name: "Android" },
                { icon: DiApple, name: "Apple" },
                { icon: DiGithubBadge, name: "Github" },
                { icon: DiJava, name: "Java" },
                { icon: DiReact, name: "React" },
                { icon: DiPostgresql, name: "PostgreSQL" },
                { icon: DiCode, name: "Code" }
            ],
            year: "2023",
            achievements: [{
                name: t("project_enso_title"),
                url: "https://enso-prototype.onrender.com/",
                type: "🧑🏻‍💻"
            }, {
                name: t("project_talos_title"),
                url: "https://vikingcentro.com/",
                type: "🧑🏻‍💻"
            }],
            quote: quotes[4]
        },
        {
            index: 6,
            title: "Entornos de Formación (EdF)",
            url: "https://www.edf.global/",
            position: "1️⃣",
            role: t("subtitle"),
            description: t('we_description6'),
            stack: [
                { icon: DiGit, name: "Git" },
                { icon: DiJava, name: "Java" },
                { icon: DiAngularSimple, name: "Angular" },
                { icon: DiAws, name: "AWS" },
                { icon: DiMysql, name: "MySQL" },
                { icon: DiCode, name: "Code" }
            ],
            year: "2024",
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
            className="w-full h-dvh md:h-full -mb-10"
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
                                <div className={"px-4 md:px-10 py-4 md:mr-0 mr-[-24px] shadow-lg md:py-6 bg-gray-200 -mt-6 rounded-lg dark:bg-slate-800 transition-all duration-300 " + (isSelected ? " md:scale-105" : "")}>
                                    <div className="mb-2 flex text-xs md:text-sm flex-row justify-between">
                                        <p className="opacity-75 min-w-[75px] text-start">{section.year}</p>
                                        {!section.url ? <p className="opacity-75 font-[400]">{section.title}</p> :
                                            <a href={section.url} target="#blank" className="opacity-75 font-bold text-end hover:scale-105 transition">{section.title}</a>}
                                    </div>
                                    <h1 className="font-bold text-2xl text-start">{section.role}</h1>

                                    {section.achievements &&
                                        <div className="flex flex-col md:flex-row text-white py-2 gap-2 md:gap-4 items-center">
                                            {section.achievements.map((achievement, index) => {
                                                return <a className="hover:scale-105 transition text-xs md:text-sm bg-slate-600 p-2 rounded-lg" href={achievement.url} target="_blank" key={index}>{achievement.type} {achievement.name}</a>
                                            })}
                                        </div>
                                    }
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex flex-col w-full">
                                            <p className="text-start opacity-75 mt-2 text-[14px]">{section.description}</p>
                                        </div>
                                        <div className="flex flex-row flex-wrap w-40 md:self-end self-center">
                                            {section.stack?.map((stack, index) => {
                                                return <div className="w-10 h-10 flex items-center justify-center" title={stack.name} key={index}>
                                                    <stack.icon size={26} />
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    <li className="py-4 px-6 w-fit md:w-[750px] md:mx-auto pb-14 flex flex-col items-center justify-center">
                        <span className="text-start opacity-75 mt-2 text-[14px]">
                            {t('regards_title')}<br/><br/>{t('regards_subtitle')}
                        </span>
                        <GitHub namespace={"1dmaol"} />
                    </li>
                </ul>
            </div>
        </section>
    )
}