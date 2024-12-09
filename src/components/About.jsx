import { useEffect, useState } from "react"
import FadeInSection from "./basics/FadeInSection"
import { Section } from "./basics/Section"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export const About = () => {
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
            year: "2023",
            achievements: [{
                name: t("project_enso_title"),
                url: "https://enso-prototype.onrender.com/",
                type: "🧑🏻‍💻"
            }, {
                name: t("project_helios_title"),
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
            year: "2024",
            quote: quotes[4]
        }
    ]

    const isMobile = window.innerWidth < 768
    const journeyCardHeight = 140;
    const height = isMobile ? sections * journeyCardHeight : 210

    const [selected, setSelected] = useState(sections[0])
    const [quote, setQuote] = useState("")
    const [isVisible, setVisible] = useState(false);
    const [isAnimating, setAnimating] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoReplay, setAutoReplay] = useState(true);
    const [currentTimeout, setCurrentTimeout] = useState(null);

    const ANIM_DURATION = .3;

    function customDivision(numerator, denominator) {
        let result = numerator / denominator;

        if (result > 1) {
            // Si el resultado es mayor que 1, restamos el exceso
            result = 2 - result;
        }

        result = result.toFixed(1);
        result = result <= 0 ? 0.2 : result;
        return result; // Redondear a 1 decimal
    }

    useEffect(() => {
        if (selected && quote !== "" && selected.quote !== quote) {
            setFadeIn(false)
            setAnimating(true)
            setTimeout(() => { setQuote(selected.quote); setAnimating(false); setFadeIn(true) }, ANIM_DURATION * 1000)
            return;
        }

        if (selected) {
            setFadeIn(true)
            setQuote(selected.quote)
        } else {
            setFadeIn(false);
            setAnimating(true)
            setTimeout(() => {
                setQuote("");
                setAnimating(false)
            }, ANIM_DURATION * 1000)
        }
    }, [selected])

    useEffect(() => {
        if (!autoReplay) return;
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
        <FadeInSection
            id="about"
            className="w-full h-dvh"
            isVisible={isVisible}
            setVisible={setVisible}
        >
            <div
                onMouseLeave={() => {
                    setAutoReplay(true)
                    setCurrentIndex((currentIndex + 1) % sections.length);
                    setSelected(sections[currentIndex])
                }}
                className="flex flex-col items-center justify-center flex-col gap-8"
            >

                <h2 id="about" className="text-3xl font-bold">{t('about')}</h2>

                <span>
                    {t('about_title')}
                    <br />
                    <br />
                    {t('about_subtitle')}
                </span>

                <div
                    id="journey"
                    className="flex flex-col md:flex-row rounded-lg gap-12 md:h-[300px] items-center overflow-x-hidden md:overflow-x-auto md:w-dvw md:px-24 px-0 overflow-y-auto md:overflow-y-hidden no-scrollbar">
                    {
                        sections.sort((a, b) => isMobile ? b.index - a.index : a.index - b.index).map((section, index) => {
                            return <Section
                                className={"transition-all duration-300 " + (selected.index === section.index ? "md:scale-110" : "md:scale-90")}
                                onMouseOver={() => {
                                    setAutoReplay(false)
                                    clearTimeout(currentTimeout);
                                    if (!isAnimating) {
                                        setCurrentIndex(index);
                                        setSelected(sections[index])
                                    }
                                }}
                                onClick={(e) => {
                                    if (isMobile) {
                                        document.getElementById("journey").scrollTo({
                                            top: journeyCardHeight * index,
                                            behavior: 'smooth'
                                        })
                                    }
                                }}
                                style={{ opacity: customDivision(selected.index, section.index) }}
                                key={index} section={section}
                                selected={selected.index === section.index} />
                        })
                    }
                </div>

                <div className="flex flex-row items-center justify-center h-[50px] w-[600px] gap-2 md:flex hidden">
                {
                        sections.map((section, index) => {
                            return <div className={"h-[10px] w-[10px] bg-[#555555] rounded-full transition duration-300 " + (section.index === selected.index ? "scale-105" : "scale-75")} key={index}/>
                        })
                    }
                </div>

                {!isMobile &&
                    <div className="h-[50px] w-[600px]">
                        <motion.span className="italic" initial={fadeIn ? { opacity: 0 } : { opacity: 1 }} animate={fadeIn ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: ANIM_DURATION }}>{quote}</motion.span>
                    </div>
                }
            </div>
        </FadeInSection>
    )
}