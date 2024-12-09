import { useEffect, useState } from "react";
import { Card } from "./basics/Card"
import { Project } from "./basics/Project";
import FadeInSection from "./basics/FadeInSection";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { currentProjectsHeight } from "../consts/sizes";
import { useTranslation } from "react-i18next";


export const Projects = () => {
    const { t } = useTranslation()
    const isMobile = window.innerWidth < 768

    const projects = [
        {
            title: "Enso",
            body: t("project_enso_body"),
            order:2,
            href: "https://github.com/marcocaballero/portfolio",
            achievements: [
                {
                    title: t("project_enso_title1"),
                    content: t("project_enso_hint1"),
                    image: new URL('../assets/EnsoIphoneMac.png', import.meta.url).href
                },
                {
                    title: t("project_enso_title2"),
                    content: t("project_enso_hint2"),
                    image: new URL('../assets/EnsoIphoneMac.png', import.meta.url).href
                }
            ],
            image: new URL('../assets/EnsoIphoneMac.png', import.meta.url).href,
            //github: { namespace: "1dmaol", repo: "Enso" },
            stack: [
                "React",
                "Google Drive",
                "Typescript",
                "Tailwind",
                "Render.com",
            ]
        },
        {
            title: "Helios",
            body: t("project_helios_body"),
            order:1,
            fav: true,
            awards: [
                {
                    title: "🏋🏼 " + t("real_case") + " (Viking Centro)",
                    url: "https://vikingcentro.com/",
                    record: {
                        title: t("users"),
                        amount: "+500"
                    }
                }
            ],
            achievements: [
                {
                    title: t("project_helios_title1"),
                    content: t("project_helios_hint1"),
                    image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href
                },
                {
                    title: t("project_helios_title2"),
                    content: t("project_helios_hint2"),
                    image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href
                },
                {
                    title: t("project_helios_title3"),
                    content: t("project_helios_hint3"),
                    image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href
                },
                {
                    title: t("project_helios_title4"),
                    content: t("project_helios_hint4"),
                    image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href
                }
            ],
            href: "https://github.com/marcocaballero/portfolio",
            image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href,
            website: "https://helios.marcoller.eu/",
            stack: [
                "React",
                "React Native",
                "Postgres",
                "Springboot",
                "Typescript",
                "IOS",
                "Android",
                "Docker",
                "Firebase FCM",
                "Stripe",
                "DevOps"
            ]
        },
        {
            title: "iDrill",
            order:3,
            body: t("project_idrill_body"),
            href: "https://github.com/marcocaballero/portfolio",
            achievements: [
                {
                    title: t("project_idrill_title1"),
                    content: t("project_idrill_hint1"),
                    image: new URL('../assets/idrillonPhone.png', import.meta.url).href
                },
                {
                    title: t("project_idrill_title2"),
                    content: t("project_idrill_hint2"),
                    image: new URL('../assets/idrillonPhone.png', import.meta.url).href
                },
                {
                    title: t("project_idrill_title3"),
                    content: t("project_idrill_hint3"),
                    image: new URL('../assets/idrilltest_1.jpeg', import.meta.url).href
                },
                {
                    title: t("project_idrill_title4"),
                    content: t("project_idrill_hint4"),
                    image: new URL('../assets/idrilltest_2.jpeg', import.meta.url).href
                }
            ],
            image: new URL('../assets/idrillonPhone.png', import.meta.url).href,
            awards: [
                {
                    title: "🥇 " + t("best_tfg"),
                    url: "https://www.linkedin.com/feed/update/urn:li:activity:7026505574502514688/",
                },
                {
                    title: "🧑🏻‍⚕️ " + t("real_case") + " (IVIO)",
                    url: "https://ivio.es/"
                }
            ],
            stack: [
                "React",
                "Unity",
                "C#",
                "AR",
                "Springboot"
            ]
        },
        {
            title: t("project_see_more_title"),
            body: t("project_see_more_body"),
            order:4,
            href: "https://www.linkedin.com/in/marc-oller/details/projects/",
            redirect: true,
            stack: [
            ]
        }
    ];

    const [selected, setSelected] = useState(null)

    const [page, setPage] = useState(0)
    const MAX_ELEMENTS = isMobile ? 2 : window.innerWidth < 1200 ? window.innerWidth < 810 ? 1 : 2 : 3;
    const [isLastPage, setIsLastPage] = useState(projects.length <= (MAX_ELEMENTS * page) + MAX_ELEMENTS)

    useEffect(() => {
        setIsLastPage(projects.length <= (MAX_ELEMENTS * page) + MAX_ELEMENTS)
    }, [page])

    return (
        <section id="projects" className="w-full md:h-dvh h-full flex flex-col justify-center md:pb-10 container mx-auto">
            {
                selected ?
                    <>
                        <Project {...selected} onClick={() => setSelected(null)} />
                    </>
                    :
                    <div className="flex flex-col gap-8">
                        <h2 id="about" className="text-3xl font-bold">{t("projects")}</h2>
                        {
                            isMobile ?
                                <div className="flex flex-col justify-center gap-8 w-full items-center flex-wrap align-baseline">
                                    {projects.sort((a, b) => a.order - b.order).slice((page * MAX_ELEMENTS), (page * MAX_ELEMENTS) + MAX_ELEMENTS).map((project) =>
                                        <Card key={project.title} {...project} selected={selected}
                                            onClick={() => {
                                                window.scrollTo({ top: currentProjectsHeight, behavior: 'smooth' });
                                                if (project.redirect)
                                                    window.open(
                                                        project.href,
                                                        '_blank'
                                                    );
                                                else
                                                    setSelected(project)
                                            }}
                                        />
                                    )}

                                    <div className="flex flex-row justify-between w-full">
                                        {page !== 0 ?
                                            <div onClick={() => { setPage(page - 1) }} className="bg-white dark:bg-slate-800 rounded-full p-2 cursor-pointer shadow">
                                                <IoIosArrowBack />
                                            </div> : <div></div>}
                                        {!isLastPage &&
                                            <div onClick={() => { setPage(page + 1) }} className="bg-white dark:bg-slate-800 rounded-full p-2 cursor-pointer shadow ">
                                                <IoIosArrowForward />
                                            </div>}
                                    </div>
                                </div>
                                :
                                <div className="flex flex-row gap-8 justify-center items-center">
                                    {page !== 0 &&
                                        <div onClick={() => { setPage(page - 1) }} className="bg-white dark:bg-slate-800 absolute left-14 rounded-full p-2 hover:scale-125 transition cursor-pointer shadow-lg">
                                            <IoIosArrowBack />
                                        </div>}
                                    <div className="flex flex-row justify-center gap-16 w-[1200px] items-center flex-wrap align-baseline">
                                        {projects.slice((page * MAX_ELEMENTS), (page * MAX_ELEMENTS) + MAX_ELEMENTS).map((project) =>
                                            <Card key={project.title} {...project} selected={selected}
                                                onClick={() => {
                                                    window.scrollTo({ top: currentProjectsHeight, behavior: 'smooth' });

                                                    if (project.redirect)
                                                        window.open(
                                                            project.href,
                                                            '_blank'
                                                        );
                                                    else
                                                        setSelected(project)
                                                }}
                                            />
                                        )}
                                    </div>
                                    {!isLastPage &&
                                        <div onClick={() => { setPage(page + 1) }} className="bg-white dark:bg-slate-800 md:absolute md:right-14 rounded-full p-2 hover:scale-125 transition cursor-pointer shadow-lg">
                                            <IoIosArrowForward />
                                        </div>}
                                </div>
                        }

                    </div>
            }
        </section>
    )
}