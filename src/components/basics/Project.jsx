import { IoArrowBackOutline } from "react-icons/io5";
import { GitHub } from "./GitHub";
import { Tag } from "./Tag";
import { motion } from "framer-motion"
import { LinkedIn } from "./LinkedIn";

export const Project = ({ title, image=null, body, advancedBody, github=null, stack, onClick, href=null, website=null, awards=null }) => {
    
    return (
        <motion.div
            animate={{ opacity: 1 }} initial={{ opacity: 0 }}
            className={"flex gap-4 flex-col w-full justify-center p-4 items-center gap-2"}
        >
            <div className="flex flex-col md:flex-row gap-16 md:w-full">
                <div className="flex flex-col justify-between gap-4 md:flex-grow">

                    <h2 className="text-5xl font-bold py-2 w-full">
                        {title}
                    </h2>

                    <p className="font-bold text-2xl">
                        {body}
                    </p>

                    <p>
                        {advancedBody}
                    </p>

                    {github && <GitHub type="forks" size="large" namespace={github.namespace} repo={github.repo} />}

                    {website && 
                    <div className={"w-fit h-fit text-sm bg-[#2157AA] text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center"} onClick={()=>window.open(website, "_blank")}>
                        Acceder a la página web
                    </div> }

                    {awards && 
                    awards.map((award, index) => {
                        return <div 
                                    key={index} 
                                    className="w-fit h-fit text-sm bg-[#2157AA] text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center" 
                                    onClick={()=>window.open(award.url, "_blank")}>
                                        {award.title}
                                </div>
                    })}

                    <div className="flex gap-2 flex-wrap justify-center">
                        {
                            stack.map((tag, index) => {
                                return <Tag key={index} title={tag} />;
                            })
                        }
                    </div>
                </div>

                {image && <img src={image} alt="logo" className={`flex h-[250px] md:h-[350px] items-center align-center rounded-lg object-contain md:object-cover`} />}
            </div>

            <div className={"bg-white py-2 px-4 m-8 rounded-full cursor-pointer shadow-xl hover:scale-105 transition"} onClick={onClick}>
                Volver a los proyectos
            </div>
                        {/*<IoArrowBackOutline className="text-2xl hover:cursor-pointer hover:scale-110 transition" onClick={onClick} />*/}

        </motion.div>
    )
}