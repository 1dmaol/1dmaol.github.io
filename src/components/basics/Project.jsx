import { IoArrowBackOutline } from "react-icons/io5";
import { GitHub } from "./GitHub";
import { Tag } from "./Tag";
import { motion } from "framer-motion"

export const Project = ({ title, image, body, advancedBody, github=null, stack, onClick }) => {
    return (
        <motion.div
            animate={{ opacity: 1 }} initial={{ opacity: 0 }}
            className={"flex gap-4 flex-col w-full justify-center bg-white p-4 rounded-lg items-center cursor-pointer gap-2 shadow"}
        >
            <div className="flex flex-col md:flex-row gap-2 md:w-full">
                <div className="flex flex-col gap-2 md:flex-grow">
                    <div className="flex flex-row gap-2 items-center">
                        <IoArrowBackOutline className="text-2xl hover:cursor-pointer hover:scale-110 transition" onClick={onClick} />

                        <h2 className="text-2xl font-bold py-2 w-full pr-9">
                            {title}
                        </h2>
                    </div>
                    <p className="flex-grow">
                        {body}
                    </p>

                    <p className="flex-grow">
                        {advancedBody}
                    </p>
                    {github && <GitHub type="forks" size="large" namespace={github.namespace} repo={github.repo} />}
                    <div className="flex gap-2 flex-wrap justify-center">
                        {
                            stack.map((tag, index) => {
                                return <Tag key={index} title={tag} />;
                            })
                        }
                    </div>
                </div>

                <img src={image} alt="logo" className={`flex h-[250px] md:h-[350px] items-center align-center rounded-lg object-contain md:object-cover`} />
            </div>

        </motion.div>
    )
}