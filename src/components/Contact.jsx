import FadeInSection from "./basics/FadeInSection"

export const Contact = () => {
    return (
        <FadeInSection
            className="w-full h-dvh flex items-center justify-center flex-col gap-10">
            <h2 id="about" className="text-3xl font-bold">Contacto</h2>

            <span>
                GitHub: <a href="https://github.com/1dmaol">1dmaol</a>
            </span>

            <span>
                LinkedIn: <a href="https://www.linkedin.com/in/marc-oller"
                >in/marc-oller</a>
            </span>

            <span>
                <a href="https://github.com/1dmaol"
                >marcollercaballe.github.io</a
                >
            </span>
        </FadeInSection>
    )
}