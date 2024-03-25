import './App.css'
import { Who } from './components/Who'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { useEffect, useState } from 'react'

function App() {

    const [nightMode, setNightMode] = useState(true)


    useEffect(() => {
        if (nightMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [nightMode]);

    return (
        <>
            <Header nightMode={nightMode} />
            <Who />
            <Projects />
            <About />

            <div className="hover:cursor-pointer"
                onClick={() => { setNightMode(!nightMode) }}>
                <div className={"w-0 h-0 top-0 right-0 absolute rotate-90 border-t-[0px] border-t-transparent border-b-[100px] border-b-transparent border-l-[100px]" + (nightMode ? " border-l-gray-600": " border-l-yellow-100")} />
                {
                    nightMode ?
                        <div className="absolute top-4 right-4 text-2xl hover:scale-110 transition">
                            🌑
                        </div> :
                        <div className="absolute top-4 right-4 text-2xl hover:scale-110 transition">
                            🌕
                        </div>
                }

            </div>

        </>
    )
}

export default App
