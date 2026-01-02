import { motion } from "framer-motion";

export const Section = ({ onMouseOver, onClick, section, selected, style = {}, className="" }) => {

    const isMobile = window.innerWidth < 768

    return (
        <div style={style} onMouseOver={onMouseOver} onClick={onClick} className={"flex flex-col min-w-[300px] gap-4 text-slate-400 hover:text-black dark:hover:text-white transition cursor-default tooltip " + className}>
            
                <div className={" w-10 h-10 self-center flex items-center justify-center " + (selected?"border-black dark:border-white scale-125 ":"border-slate-400")}>
                    <p className={"text-center transparent font-bold text-3xl"+ (selected ? " text-black dark:text-white" : "")}>{section.position}</p>
                </div>
                <div className="flex flex-col">
            <div className={"flex flex-col overflow-hidden hover:scale-105 transition" + (selected ? " scale-105 text-black dark:text-white" : "")}>
                <h2 className="whitespace-nowrap">{section.title}</h2>
                <h2 className="whitespace-nowrap">{section.role}</h2>
                <h2 className="whitespace-nowrap">{section.year}</h2>
            </div>

            {!isMobile && section.achievements && selected && <div className="flex flex-col bg-[#555555] text-white p-2 mt-4 rounded-lg transition-all duration-300">
                {section.achievements.map((achievement, index) => {
                    return <a className="whitespace-nowrap" href={achievement.url} target="_blank" key={index}>{achievement.type} {achievement.name}</a>
                })}
                </div> }

            {
                isMobile && selected && 
                <div className="flex flex-col m-4">
                    {section.achievements &&
                    <div className="flex flex-col bg-[#555555] text-white p-2 mb-2 rounded-lg">
                        {section.achievements.map((achievement, index) => {
                            return <a className="whitespace-nowrap" href={achievement.url} target="_blank" key={index}>{achievement.type} {achievement.name}</a>
                        })}
                    </div>}

                    <div>
                        <motion.span className="italic dark:text-gray-400" initial={selected ? { opacity: 0 } : { opacity: 1 }} animate={selected ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 1 }}>{section.quote}</motion.span>
                    </div>
                </div>
            }
            </div>
            {/*
            <div className={isFirst && "flex justify-end"}>
                <motion.hr 
                    initial={selected ? { borderColor: "#CBD5E1" } : { borderColor: "black" }} 
                    animate={selected ? { borderColor: "black" } : { borderColor: "#CBD5E1" }} 
                    transition={{ duration: 1 }} 
                    className={hrWidth + " border-4 " } />
            </div>
            */}
        </div>
    )
}