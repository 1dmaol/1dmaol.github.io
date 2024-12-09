import { IoArrowBackOutline } from "react-icons/io5";
import { GitHub } from "./GitHub";
import { Tag } from "./Tag";
import { motion } from "framer-motion"
import { LinkedIn } from "./LinkedIn";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const Project = ({ title, image = null, video = null, body, github = null, stack, onClick, href = null, website = null, awards = null, achievements = null }) => {

    const { t } = useTranslation()

    return (
        <motion.div
            animate={{ opacity: 1 }} initial={{ opacity: 0 }}
            className={"flex gap-4 flex-col w-full justify-center p-4 items-center gap-2"}
        >
            <div className="flex flex-col md:flex-row gap-16 md:w-full items-center">
                <div className="flex flex-col justify-between gap-8 md:flex-grow">
                    <div className="flex flex-col justify-between gap-2 md:flex-grow">
                        <h2 className="text-5xl font-bold py-2 w-full">{title}</h2>
                        <p className="font-[500] text-lg md:text-2xl opacity-70">{body}</p>
                    </div>

                    {achievements && <AchievementsAccordition achievements={achievements} />}

                    {github && <GitHub type="forks" size="large" namespace={github.namespace} repo={github.repo} />}

                    {website &&
                        <div className={"w-fit h-fit text-sm bg-[#374151] dark:bg-[#374151] text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center"} onClick={() => window.open(website, "_blank")}>
                            {t('go_to_website')}
                        </div>
                    }

                    {awards &&
                        <div className="flex gap-2 flex-wrap justify-center">
                            {awards.map((award, index) => {
                                return <div
                                    key={index}
                                    className="w-fit h-fit text-md md:text-sm bg-[#2157AA] dark:bg-[#1B4789FF] gap-2 text-white p-2 rounded-lg cursor-pointer shadow-xl flex self-center items-center flex-col md:flex-row"
                                    onClick={() => window.open(award.url, "_blank")}>
                                    <span className="font-[500] md:text-md text-sm">{award.title}</span>
                                    {award.record && <div className="text-xs px-2 py-1 bg-[#f1f1f1] text-[#2157AA] dark:bg-[#f1f1f1] rounded dark:text-[#1B4789FF] font-[500]">{award.record.amount + " " + award.record.title}</div>}
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
                    <img src={achievements[0].image} alt="logo" className={`flex h-[200px] md:h-[400px] md:w-[550px] md:aspect-[16/10] items-center align-center rounded-lg object-contain md:object-fill`} />
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

const MotionText = ({ achievements }) => {

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
        <div>
            {achievements &&
                <motion.p className="h-[130px] md:h-[50px] flex items-center justify-center"
                    animate={fadeIn ? { opacity: 1 } : { opacity: 0 }}
                    initial={fadeIn ? { opacity: 0 } : { opacity: 1 }}
                >
                    {achievements[position].content}
                </motion.p>
            }

            {achievements && achievements.length > 1 &&
                <div className="w-full bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: animProgress + "%" }} />
                </div>}
        </div>
    )

}

const AchievementsAccordition = ({ achievements }) => {

    const [selected, setSelected] = useState(null)
    const [lastSelected, setLastSelected] = useState(null)

    useEffect(() => {
        const content = document.getElementById('accord_achievement_' + selected);
        const lastContent = document.getElementById('accord_achievement_' + lastSelected);

        if (lastContent) {
            lastContent.style.maxHeight = '0';
        }

        if (!content) return

        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }, [selected])

    return (
        <div className="w-full">
            {achievements.map((achievement, index) => {
                console.log("achievement", achievement)
                return (
                    <Accordition
                        item={achievement}
                        contentId={'accord_achievement_' + index}
                        isSelected={selected === index}
                        key={index}
                        onClick={() => { setLastSelected(selected); setSelected(selected === index ? null : index) }} />
                )
            })}
        </div>
    )
}

const Accordition = React.memo(({ item, isSelected, onClick, contentId }) => {

    return (
        <div className="border-b border-slate-200 dark:border-slate-700">
            <button onClick={onClick} className="w-full flex md:text-lg text-md justify-between items-center py-4 md:py-5 text-slate-800 dark:text-slate-200">
                <span>{item.title}</span>
                <span id="icon-2" className="text-slate-800 dark:text-slate-200 transition-transform duration-300">
                    {isSelected ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
                    }
                </span>
            </button>
            <div id={contentId} className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="pb-5 text-md text-slate-500 dark:text-slate-400 px-4">
                    {item.content}
                </div>
            </div>
        </div>
    )
})
