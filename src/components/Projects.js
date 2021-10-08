import React from 'react';
import { ElementArray } from '../scripts/utilities';
import data from "../scripts/data";

const projects = data.projects;

const Projects = () => (
	<section className="projects content-element" id="projects">
		<h2 className="projects__title title">Мои проекты</h2>
		{
			ElementArray(projects.length, (i) => <Project key={i} index={i} />)
		}
	</section>
);

const Project = ({ index }) => {
	return (
		<div className="projects__project project">
			<h2 className="project__title title">{projects[index].name}</h2>
			<article className="project__desc">{projects[index].description}</article>
			<a rel="noreferrer" href={projects[index].link} target="_blank" className="project__link">{projects[index].link_text}</a>
		</div>
	)
}

export default Projects;