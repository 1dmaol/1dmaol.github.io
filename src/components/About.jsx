import FadeInSection from "./basics/FadeInSection"

export const About = () => {
    return (
        <FadeInSection
            id="about"
            className="w-full h-dvh flex items-center justify-center flex-col gap-10 text-xl"
        >
            <h2 id="about" className="text-3xl font-bold">Sobre mí</h2>

            <span>
                ¡Hola! Soy un apasionado desarrollador fullstack con experiencia
                en la creación de soluciones eficientes y atractivas.
                <br />
                <br />
                Mi iniciativa para desarrollar proyectos propios, reflejando
                creatividad y habilidades técnicas, se han convertido en
                oportunidades para explorar nuevas ideas y enfoques,
                consolidando mi experiencia.
            </span>

            <span>
                En el futuro, aspiro a convertirme en un arquitecto de software.
                Mi pasión y dedicación a la mejora continua me impulsan
                constantemente a aprender y evolucionar en este dinámico mundo
                de la programación.
            </span>

            <span>
                ¡Gracias por visitar mi portfolio! Estoy emocionado por el
                futuro y ansioso por contribuir a proyectos que marquen la
                diferencia en el mundo tecnológico.
            </span>
        </FadeInSection>
    )
}