import { FaLinkedin } from "react-icons/fa";

export const LinkedIn = () => {
    return (
        <a href={`https://www.linkedin.com/in/marc-oller/`} className="flex gap-2 items-center self-center rounded py-1 px-2 hover:scale-110 transition">
            <FaLinkedin size="20" />
        </a>
    )
}