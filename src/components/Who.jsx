import AnimatedText from "./basics/AnimatedText"
import { GitHub } from "./basics/GitHub"
import { LinkedIn } from "./basics/LinkedIn"

export const Who = () => {
    return (
        <section className="w-full h-screen md:h-dvh flex items-center justify-center flex-col gap-10">
            <AnimatedText className="text-8xl font-bold text-start md:text-center" text={"Marc Oller Caballé".split('')} />
            <AnimatedText className="text-3xl font-bold text-start md:text-center" text={"Desarrollador Full Stack".split('')} />
            <div className="flex flex-row">
                <GitHub namespace="1dmaol" />
                <LinkedIn />
            </div>
        </section>
    )
}