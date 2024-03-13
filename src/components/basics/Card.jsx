import { useState } from "react";
import { LinkedIn } from "./LinkedIn";
import { Tag } from "./Tag";
import { motion } from "framer-motion";

export const Card = ({ title, image = null, body, stack, redirect=false, onClick }) => {

    const [loading, setLoading] = useState(true)

    return (
        <motion.div onClick={onClick}
                animate={{ opacity: 1 }} initial={{ opacity: 0 }}
                className={"item flex gap-4 flex-col w-full md:w-[320px] hover:scale-105 transition bg-white p-4 rounded-lg items-center cursor-pointer gap-2 shadow h-[435px] " + (redirect ? "justify-around" : "justify-between")}
        >
            <div className="flex flex-col gap-2">
                {loading && <div class="image-placeholder placeholder"/>}
                {image && <img src={image} id="image" onLoad={() => setLoading(false)} alt="logo" className={`aspect-[16/10] md:w-[300px] rounded-lg object-cover ` + (loading ? "hidden" : "flex")} />}
                <a>
                    <h2 className="text-lg font-bold py-2">
                        {title}
                    </h2>
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