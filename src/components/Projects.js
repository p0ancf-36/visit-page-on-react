import React from 'react';
import { ElementArray } from '../scripts/utilities';
import projectsData from "../scripts/data/projects-data";

const Projects = () => (
	<section className="projects" id="projects">
		<div className="container">
			<h2 className="projects__title title">{projectsData.title}</h2>
			{
				ElementArray(projectsData.projects.length, (i) => <Project key={i} index={i} />)
			}
		</div>
	</section>
);

const Project = ({ index }) => {
	return (
		<div className="projects__project project">
			<h2 className="project__title title">{projectsData.projects[index].name}</h2>
			<article className="project__desc">{projectsData.projects[index].description}</article>
			<span className="project__link">
				Ссылка на проект:
				<a rel="noreferrer" href={projectsData.projects[index].link} target="_blank"> {projectsData.projects[index].link_text}</a>
			</span>
		</div>
	)
}

export default Projects;