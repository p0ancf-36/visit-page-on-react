import React from 'react';
import { Row, Col, Grid } from "antd";

import data from "../scripts/data";
import aboutMeData from '../scripts/data/about-me-data';
import AnchorLink from './utils/AnchorLink';

const { useBreakpoint } = Grid;
const foto = require(`../img/${aboutMeData.fotoName}`).default;
const bg = require(`../img/${aboutMeData.bgUrl}`).default;

const AboutMe = () => {
	const breakpoints = useBreakpoint();
	return (
		<section className="about" style={{ backgroundImage: `url(${bg})` }} id="about">
			<Col xs={24} sm={20}>
				<article>
					<h2 className="about__title title">{aboutMeData.name}</h2>
					<Row>
						<Col xs={24} lg={8} className="about__foto"><img src={foto} alt="Фото" /></Col>
						<Col xs={24} lg={16} className="about__text">
							<div className="about__subtitle">{aboutMeData.desc}</div>
						</Col>
					</Row>
				</article>
			</Col>
			{breakpoints.lg && <AnchorLink className="arrow" anchorQuery="#intrests" margin={data.margin}><div><span></span></div></AnchorLink>}
		</section>
	)
}

export default AboutMe;