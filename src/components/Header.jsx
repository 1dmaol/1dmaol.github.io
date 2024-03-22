import { currentAboutHeight, currentProjectsHeight } from "../consts/sizes"

export const Header = () => {

    console.log(currentAboutHeight, currentProjectsHeight)

    return (
        <header className="flex justify-between items-center absolute md:left-20 md:right-20">
            <a href="https://1dmaol.github.io/">
                <img
                    className="rounded-full w-20 h-22 bg-[url('/assets/mezz.png')] hover:scale-110 transition"
                    src={new URL('../assets/mepp.png', import.meta.url).href}
                    alt="logo" />
            </a>

            <nav className="flex flex-row gap-x-20 hidden md:flex">
                <a className="text-xl hover:scale-110 transition cursor-pointer" onClick={() => window.scrollTo({ top: currentProjectsHeight, behavior: 'smooth' })}>Proyectos</a>
                <a className="text-xl hover:scale-110 transition cursor-pointer" onClick={() => window.scrollTo({ top: currentAboutHeight, behavior: 'smooth' })}>Sobre mí</a>
            </nav>

        </header>
    )
}