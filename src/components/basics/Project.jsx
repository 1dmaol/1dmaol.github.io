import { IoArrowBackOutline } from "react-icons/io5";
import { GitHub } from "./GitHub";
import { Tag } from "./Tag";
import { motion } from "framer-motion"
import { LinkedIn } from "./LinkedIn";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const Project = ({ title, image = null, video = null, body, github = null, stack, onClick, href = null, website = null, awards = null, achievements = null }) => {

    const { t } = useTranslation()

    const [position, setPosition] = useState(0)
    const [fadeIn, setFadeIn] = useState(true)
    const [animProgress, setAnimProgress] = useState(0)
    const ANIM_DURATION = 5000
    const [startTime, setStartTime] = useState(0)
    useEffect(() => {
        if (achievements.length <= 1) return

        setStartTime(Date.now())

        setTimeout(() => {
            setFadeIn(true)
        }, ANIM_DURATION / 20)

        setTimeout(() => {
            if (position < achievements.length - 1) {
                setPosition(position + 1)
            } else {
                setPosition(0)
            }
        }, ANIM_DURATION)

        setTimeout(() => {
            setFadeIn(false)
        }, ANIM_DURATION - ANIM_DURATION / 20)
    }, [position])

    useEffect(() => {
        if (animProgress > 100) {
            setAnimProgress(0)
        }
        let interval = setInterval(() => setAnimProgress(((new Date() - startTime) * 2 / 100).toFixed(2)), 10);
        return () => clearInterval(interval);
    }, [animProgress])

    return (
        <motion.div
            animate={{ opacity: 1 }} initial={{ opacity: 0 }}
            className={"flex gap-4 flex-col w-full justify-center p-4 items-center gap-2"}
        >
            <div className="flex flex-col md:flex-row gap-16 md:w-full">
                <div className="flex flex-col justify-between gap-4 md:flex-grow">

                    <h2 className="text-5xl font-bold py-2 w-full">{title}</h2>

                    <p className="font-bold text-2xl">{body}</p>

                    {achievements &&
                        <motion.p className="h-[130px] md:h-[50px] flex items-center justify-center"
                            animate={fadeIn ? { opacity: 1 } : { opacity: 0 }}
                            initial={fadeIn ? { opacity: 0 } : { opacity: 1 }}
                        >
                            {achievements[position].title}
                        </motion.p>
                    }

                    {achievements && achievements.length > 1 &&
                        <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: animProgress + "%" }} />
                        </div>}

                    {github && <GitHub type="forks" size="large" namespace={github.namespace} repo={github.repo} />}

                    {website &&
                        <div className={"w-fit h-fit text-sm bg-[#2157AA] text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center"} onClick={() => window.open(website, "_blank")}>
                            {t('go_to_website')}
                        </div>
                    }

                    {awards &&
                        <div className="flex gap-2 flex-wrap justify-center">
                            {awards.map((award, index) => {
                                return <div
                                    key={index}
                                    className="w-fit h-fit text-sm bg-[#2157AA] text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center"
                                    onClick={() => window.open(award.url, "_blank")}>
                                    {award.title}
                                </div>
                            })}
                        </div>

                    }

                    <div className="flex gap-2 flex-wrap justify-center">
                        {
                            stack.map((tag, index) => {
                                return <Tag key={index} title={tag} />;
                            })
                        }
                    </div>
                </div>

                {achievements &&
                    image ?
                        <img src={achievements[position].image} alt="logo" className={`flex h-[250px] md:h-[350px] md:w-[500px] aspect-[16/10] items-center align-center rounded-lg object-contain md:object-fill`} />
                    :
                    video && <video className="h-[250px] md:h-[350px] md:w-[500px] aspect-[16/10] items-center align-center rounded-lg object-contain md:object-fill" src={video} controls />
                    }


            </div>

            <div className={"bg-white py-2 px-4 m-8 rounded-full cursor-pointer shadow-xl hover:scale-105 transition dark:bg-slate-800 dark:text-white"} onClick={onClick}>
                {t("project_back")}
            </div>
            {/*<IoArrowBackOutline className="text-2xl hover:cursor-pointer hover:scale-110 transition" onClick={onClick} />*/}

        </motion.div>
    )
}