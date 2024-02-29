import { Tag } from "./Tag";

export const Card = ({ title, image, body, stack, onClick }) => {

    return (
        <div onClick={onClick}
            className={"flex gap-4 flex-col w-full md:w-[320px] hover:scale-105 transition bg-white p-4 rounded-lg items-center cursor-pointer gap-2 shadow h-[435px] justify-between"}
        >
            <div className="flex flex-col gap-2">
                <img src={image} alt="logo" className={`flex h-[175px] rounded-lg object-cover`} />

                <a>
                    <h2 className="text-lg font-bold py-2">
                        {title}
                    </h2>
                    <p>
                        {body}
                    </p>
                </a>
            </div>

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

        </div>

    )
}