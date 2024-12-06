import { useState } from "react";
import { LinkedIn } from "./LinkedIn";
import { Tag } from "./Tag";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Card = ({ title, image = null, body, stack, redirect = false, onClick, ...props }) => {
    const { t } = useTranslation()

    const [loading, setLoading] = useState(true)

    return (
        <motion.div onClick={onClick}
            animate={{ opacity: 1 }} initial={{ opacity: 0 }}
            className={"item flex gap-4 flex-col w-full md:w-[320px] hover:scale-105 transition bg-white dark:bg-slate-800 p-4 rounded-lg items-center cursor-pointer gap-2 shadow-lg h-[500px] " + (redirect ? "justify-around" : "justify-between")}
        >

            <div className="flex flex-col gap-2">
                {loading && image && <div className="image-placeholder placeholder" />}
                {image && <img src={image} id="image" onLoad={() => setLoading(false)} alt="logo" className={`aspect-[16/11] md:w-[300px] rounded-lg object-fill ` + (loading ? "hidden" : "flex")} />}
                <a>
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <h2 className="md:text-lg text-2xl font-bold py-2">
                            {title}
                        </h2>
                        {props.fav && <div className="px-2 py-1 bg-yellow-500 dark:bg-yellow-600 rounded-full text-[#f1f1f1] font-bold text-[9px]">{t('fav')}</div>}
                    </div>

                    <p>
                        {body}
                    </p>
                </a>
            </div>

            {redirect && <LinkedIn />}

            {stack.length > 0 &&
                <div className="flex gap-2 flex-wrap justify-center">
                    {
                        stack.map((tag, index) => {
                            if (index > 5) return;
                            else if (index == 5)
                                return <Tag key={index} title={stack.length - 4 + " más"} />;
                            else return <Tag key={index} title={tag} />;
                        })
                    }
                </div>
            }

        </motion.div>

    )
}