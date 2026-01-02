import { useEffect, useState } from "react";
import { Card } from "./organisms/Card"
import { Project } from "./templates/Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Button } from "./atoms/Button";
import { ProjectsData } from "../resources/projects";


export const Projects = () => {

	return (
		<section id="projects" className="w-full md:min-h-dvh h-full flex flex-col justify-center md:pb-10 container mx-auto">
			<ProjectList />
		</section>
	)
}

const ProjectList = () => {
	const { t } = useTranslation()
	const [selected, setSelected] = useState(null)

	const projects = ProjectsData();

	const isMobile = window.innerWidth < 768
	const [page, setPage] = useState(0)
	const MAX_ELEMENTS = isMobile ? 2 : window.innerWidth < 1200 ? window.innerWidth < 810 ? 1 : 2 : 3;
	const [isLastPage, setIsLastPage] = useState(projects.length <= (MAX_ELEMENTS * page) + MAX_ELEMENTS)

	useEffect(() => {
		setIsLastPage(projects.length <= (MAX_ELEMENTS * page) + MAX_ELEMENTS)
	}, [page])

	return selected ?
		<Project {...selected} onClick={() => setSelected(null)} />
		:
		(
			<div id="project-list" className="flex flex-col gap-8">
				<div className="flex flex-row flex-wrap gap-8 justify-center items-center min-h-[400px]">
					{
						page == 0 ?
							<Project {...projects[0]} variant="helios" />
							:
							<div className="flex flex-col justify-center gap-8 w-full items-center flex-wrap align-baseline">
								<h2 id="about" className="text-3xl font-bold">{t("other_projects")}</h2>
								<div className="flex flex-row justify-center gap-8 md:w-[1200px] items-center flex-wrap align-baseline">
									{projects.slice((page), (page * MAX_ELEMENTS) + MAX_ELEMENTS).map((project) =>
										<Card key={project.title} {...project}
											onClick={() => {
												if (project.redirect)
													window.open(
														project.href,
														'_blank'
													);
												else
													setSelected(project)
											}}
										/>
									)}
								</div>
							</div>
					}
					{page !== 0 &&
						<Button onClick={() => { setPage(page - 1) }} icon={<IoIosArrowBack />} />}
					{!isLastPage &&
						<Button onClick={() => { setPage(page + 1) }} variant="small" title="Otros proyectos"
							icon={<IoIosArrowForward />} className="flex flex-row gap-2" />
					}
				</div>

			</div>
		)
}