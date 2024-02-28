import { FaGithub } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";

export const GitHub = ({ namespace, repo="" }) => {
    return (
        <a href={`https://github.com/${namespace}/${repo}`} className="flex gap-2 items-center self-center rounded py-1 px-2 hover:scale-110 transition">
            <FaGithub size="20" />
            <DiGithubFull size="45" />
        </a>
    )
}