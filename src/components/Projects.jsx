import { useEffect, useState } from "react";
import { Card } from "./basics/Card"
import { Project } from "./basics/Project";
import FadeInSection from "./basics/FadeInSection";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { currentProjectsHeight } from "../consts/sizes";

const projects = [
    {
        title: "Enso",
        body: "Aplicación de código abierto para controlar los gastos entre tus amigos de una forma sencilla.",
        href: "https://github.com/marcocaballero/portfolio",
        achievements: [
            {
                title: "Incorpora la posibilidad de almacenar en la nube todos los gastos registrados en la aplicación.",
                image: new URL('../assets/EnsoIphoneMac.png', import.meta.url).href
            }
        ],
        website: "https://enso-prototype.onrender.com/",
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
        title: "Viking Centro",
        body: "Desarrollo fullstack para la gestión del centro deportivo Viking Centro.",
        achievements: [
            {
                title: "Aplicación para la administración de las membresías de los miembros. (IOS y Android)",
                image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href
            },
            {
                title: "Incluye una dashboard donde poder ver toda la información de los clientes y un sistema de reservas, accesible tanto desde la aplicación como la página web.",
                image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href
            },
            {
                title: "Servidor Java Springboot dockerizado para la gestión de las peticiones a la base de datos Postgres.",
                image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href
            },
        ],
        href: "https://github.com/marcocaballero/portfolio",
        image: new URL('../assets/VikingCentroIphone15.png', import.meta.url).href,
        stack: [
            "React",
            "React Native",
            "Postgres",
            "Springboot",
            "Typescript",
            "IOS",
            "Android",
            "Docker"
        ]
    },
    {
        title: "iDrill",
        body: "Software para la asistencia en las operaciones quirurgicas dentales en realidad aumentada.",
        href: "https://github.com/marcocaballero/portfolio",
        achievements: [
            {
                title: "Funcionalidades innovadoras como asistencia de voz, compatibilidad con cualquier estuche quirúrgico...",
                image: new URL('../assets/setupiDrill.png', import.meta.url).href
            }
        ],
        image: new URL('../assets/setupiDrill.png', import.meta.url).href,
        awards: [
            {   
                title: "🥇 Mejor TFG de la promoción",        
                url: "https://www.linkedin.com/feed/update/urn:li:activity:7026505574502514688/",
            }
        ],
        stack: [
            "React",
            "Unity",
            "C#",
            "AR"
        ]
    },
    {
        title: "Ver más proyectos...",
        body: "Pulsa para ver todos mis proyectos en LinkedIn.",
        href: "https://www.linkedin.com/in/marc-oller/details/projects/",
        redirect: true,
        stack: [
        ]
    }
];

export const Projects = () => {
    const isMobile = window.innerWidth < 768

    const [selected, setSelected] = useState(null)

    const [page, setPage] = useState(0)
    const MAX_ELEMENTS = isMobile ? 2 : window.innerWidth < 1200 ? window.innerWidth < 810 ? 1 : 2 : 3;
    const [isLastPage, setIsLastPage] = useState(projects.length <= (MAX_ELEMENTS * page) + MAX_ELEMENTS)


    useEffect(() => {
        setIsLastPage(projects.length <= (MAX_ELEMENTS * page) + MAX_ELEMENTS)
    }, [page])

    return (
        <FadeInSection id="projects">
            {
                selected ?
                    <>
                        <Project {...selected} onClick={() => setSelected(null)} />
                    </>
                    :
                    <div className="flex flex-col gap-8">
                        <h2 id="about" className="text-3xl font-bold">Proyectos</h2>
                        {
                            isMobile ?
                                <div className="flex flex-col justify-center gap-8 w-full items-center flex-wrap align-baseline">
                                    {projects.slice((page * MAX_ELEMENTS), (page * MAX_ELEMENTS) + MAX_ELEMENTS).map((project) => 
                                        <Card key={project.title} {...project} selected={selected}
                                            onClick={() => { 
                                                window.scrollTo({ top: currentProjectsHeight , behavior: 'smooth' });
                                                if(project.redirect)
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
                                                <div onClick={() => { setPage(page - 1) }} className="bg-white rounded-full p-2 cursor-pointer shadow">
                                                    <IoIosArrowBack />
                                                </div> : <div></div>}
                                            {!isLastPage &&
                                            <div onClick={() => { setPage(page + 1) }} className="bg-white rounded-full p-2 cursor-pointer shadow ">
                                                <IoIosArrowForward />
                                            </div>}
                                        </div>
                                </div>
                                :
                                <div className="flex flex-row gap-8 justify-center items-center">
                                    {page !== 0 &&
                                        <div onClick={() => { setPage(page - 1) }} className="bg-white absolute left-14 rounded-full p-2 hover:scale-125 transition cursor-pointer shadow">
                                            <IoIosArrowBack />
                                        </div>}
                                    <div className="flex flex-row justify-center gap-16 w-[1200px] items-center flex-wrap align-baseline">
                                        {projects.slice((page * MAX_ELEMENTS), (page * MAX_ELEMENTS) + MAX_ELEMENTS).map((project) => 
                                            <Card key={project.title} {...project} selected={selected} 
                                                onClick={() => { 
                                                    window.scrollTo({ top: currentProjectsHeight, behavior: 'smooth' }); 
                                                    
                                                if(project.redirect)
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
                                            <div onClick={() => { setPage(page + 1) }} className="bg-white md:absolute md:right-14 rounded-full p-2 hover:scale-125 transition cursor-pointer shadow">
                                                <IoIosArrowForward />
                                            </div>}
                                </div>
                        }

                    </div>
            }
        </FadeInSection>
    )
}