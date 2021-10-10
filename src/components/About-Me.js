import React from 'react';
import { Row, Col } from 'antd';

import data from "../scripts/data";
import aboutMeData from '../scripts/data/about-me-data';
import AnchorLink from './utils/AnchorLink';

const foto = require(`../img/${aboutMeData.fotoName}`).default;
const bg = require(`../img/${aboutMeData.bgUrl}`).default;

const AboutMe = () => {
	return (
		<section className="about" style={{ backgroundImage: `url(${bg})` }} id="about">
			<article>
				<Row>
					<Col span="24">
						<h2 className="about__title title">{aboutMeData.name}</h2>
					</Col>
					<Col xs={24} sm={8}>
						<div className="about__foto"><img src={foto} alt="Фото" /></div>
					</Col>
					<Col xs={24} sm={16}>
						<div className="about__text">
							<div className="about__subtitle">{aboutMeData.desc}</div>
						</div>
					</Col>
				</Row>
			</article>
			<AnchorLink className="arrow" anchorQuery="#intrests" margin={data.margin}><div><span></span></div></AnchorLink>
		</section>
	)
}

export default AboutMe;