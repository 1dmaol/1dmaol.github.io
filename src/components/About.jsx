import { useEffect, useState } from "react"
import FadeInSection from "./basics/FadeInSection"
import { Section } from "./basics/Section"
import { motion } from "framer-motion";

const quotes = [
    "La programación es una forma de pensar. El pensamiento es la forma de programar.",
    "Mi iniciativa para desarrollar proyectos propios, reflejando creatividad y habilidades técnicas, se han convertido en oportunidades para explorar nuevas ideas y enfoques, consolidando mi experiencia.",
    "La investigación es una idónea iniciativa para contribuir en un impacto positivo en la sociedad y asentar los conceptos de la programación.",
    "En el futuro, aspiro a convertirme en un arquitecto de software. Mi pasión y dedicación a la mejora continua me impulsan constantemente a aprender y evolucionar en este dinámico mundo de la programación.",
    "¡Gracias por visitar mi portfolio! Estoy emocionado por el futuro y ansioso por contribuir a proyectos que marquen la diferencia en el mundo tecnológico."
]

const sections = [
    {
        index: 1,
        title: "Indra Studios (Londres)",
        role: "Desarrollador Fullstack",
        year: "2018 - 2019",
        achievements: [{
            name: "Desarrollo de Aplicaciones",
            url: "https://todofp.es/que-estudiar/loe/informatica-comunicaciones/des-aplicaciones-multiplataforma.html",
            type: "🎓"
        }],
        quote: quotes[0]
    },
    {
        index: 2,
        title: "Desarrollos independientes",
        role: "Desarrollador Fullstack",
        year: "2019 - 2022",
        achievements: [{
            name: "Desarrollo de proyectos",
            url: "https://www.linkedin.com/in/marc-oller/details/projects/",
            type: "🧑🏻‍💻"
        }],
        quote: quotes[1]
    },
    {
        index: 3,
        title: "IIM - Universistat Politecnica de València",
        role: "Investigador - Desarrollador Fullstack",
        year: "2021 - 2022",
        achievements: [{
            name: "Grado de Tecnologías interactivas",
            url: "https://www.upv.es/titulaciones/GTI/",
            type: "🎓"
        }, {
            name: "Mejor TFG de la promoción (iDrill)",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7026505574502514688/",
            type: "🥇"
        }],
        quote: quotes[2]
    },
    {
        index: 4,
        title: "Panel Sistemas Informáticos",
        role: "Desarrollador Backend",
        year: "Septiembre 2022 - Actualidad",
        quote: quotes[3]
    },
    {
        index: 5,
        title: "Freelancer",
        role: "Desarrollador Full Stack",
        year: "Septiembre 2023 - Actualidad",
        achievements: [{
            name: "Desarrollo de Enso",
            url: "https://enso-prototype.onrender.com/",
            type: "🧑🏻‍💻"
        }, {
            name: "Desarrollo de Viking Centros",
            url: "https://vikingcentro.com/",
            type: "🧑🏻‍💻"
        }],
        quote: quotes[4]
    }
]

export const About = () => {

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
            if(currentIndex === 0) {
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

                <h2 id="about" className="text-3xl font-bold">Sobre mí</h2>

                <span>
                    ¡Hola! Soy un apasionado desarrollador fullstack con experiencia
                    en la creación de soluciones eficientes y atractivas.
                    <br />
                    <br />
                    Este es mi recorrido:
                </span>

                <div
                    id="journey"
                    className="flex flex-col md:flex-row rounded-lg gap-4 md:h-[210px] overflow-x-hidden md:overflow-x-auto md:w-[1250px] overflow-y-auto md:overflow-y-hidden no-scrollbar">
                    {
                        sections.sort((a, b) => isMobile ? b.index - a.index : a.index - b.index).map((section, index) => {
                            return <Section
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
                                key={index} section={section} selected={selected === section} />
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