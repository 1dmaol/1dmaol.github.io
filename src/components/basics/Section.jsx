import { motion } from "framer-motion";

export const Section = ({ onMouseOver, onClick, section, selected }) => {

    const isMobile = window.innerWidth < 768

    return (
        <div onMouseOver={onMouseOver} onClick={onClick} className={"flex flex-col min-w-[300px] gap-4 text-slate-400 hover:text-black transition cursor-default tooltip"}>
            
                <div className={"rounded-full border-4 w-10 h-10 self-center flex items-center justify-center " + (selected?"border-black":"border-slate-400")}>
                    <p className={"text-center font-bold text-lg"+ (selected ? " text-black" : "")}>{section.index}</p>
                </div>
                <div className="flex flex-col">
            <div className={"flex flex-col overflow-hidden hover:scale-105 transition" + (selected ? " scale-105 text-black" : "")}>
                <h2 className="whitespace-nowrap">{section.title}</h2>
                <h2 className="whitespace-nowrap">{section.role}</h2>
                <h2 className="whitespace-nowrap">{section.year}</h2>
            </div>

            {!isMobile && section.achievements && <div id={"tooltiptext"+section.index} className="tooltiptext">
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
                        <motion.span className="italic" initial={selected ? { opacity: 0 } : { opacity: 1 }} animate={selected ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 1 }}>{section.quote}</motion.span>
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