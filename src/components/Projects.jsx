import { useState } from "react";
import { Card } from "./basics/Card"
import { Project } from "./basics/Project";
import FadeInSection from "./basics/FadeInSection";

const projects = [
    {
        title: "Enso",
        body: "Aplicación de código abierto para controlar los gastos entre tus amigos de una forma sencilla.",
        advancedBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nesciunt?",
        href: "https://github.com/marcocaballero/portfolio",
        image: new URL('../assets/enso.png', import.meta.url).href,
        github: {
            namespace: "1dmaol",
            repo: "Enso"
        },
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
        body: "Aplicación para la administración de las membresías y los centros deportivos.",
        advancedBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nesciunt?",
        href: "https://github.com/marcocaballero/portfolio",
        image: new URL('../assets/viking.png', import.meta.url).href,
        stack: [
            "React",
            "React Native",
            "Postgres",
            "Springboot",
            "Tailwind",
            "Typescript",
            "Render.com",
        ]
    },
    {
        title: "iDrill",
        body: "Software para la asistencia en las operaciones quirurgicas dentales en realidad aumentada.",
        advancedBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nesciunt?",
        href: "https://github.com/marcocaballero/portfolio",
        image: new URL('../assets/viking.png', import.meta.url).href,
        stack: [
            "React",
            "Unity",
            "C#",
            "AR"
        ]
    }
];

export const Projects = () => {

    const [selected, setSelected] = useState(null)

    const isMobile = window.innerWidth < 768

    return (
        <FadeInSection id="projects">
            {
                selected ?
                    <>
                        <Project {...selected} onClick={() => setSelected(null)} />
                    </>
                    :
                    <>
                        <h2 id="about" className="text-3xl font-bold">Proyectos</h2>
                        <div className="flex flex-row justify-center gap-16 w-full items-center flex-wrap align-baseline">
                            {projects.map((project) => <Card key={project.title} {...project} selected={selected} onClick={() => {window.scrollTo({ top: isMobile ? 675 : 775, behavior: 'smooth' });setSelected(project)}} />)}
                        </div>
                    </>
            }
        </FadeInSection>
    )
}