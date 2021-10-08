import React from 'react';
import { Row, Col } from 'antd';

import data from '../scripts/data';
import { animateScroll } from "../scripts/utilities";

const about = data.about;
const foto = require(`../img/${about.foto_name}`).default;
const bg = require(`../img/${about.bgimg_name}`).default;

const AboutMe = () => {
	function scroll_() {
		animateScroll({ targetPosition: window.innerHeight - 20, initialPosition: window.scrollY, duration: 1000 });
	}

	return (
		<section className="about content-element" style={{ backgroundImage: `url(${bg})` }} id="about">
			<div className="container">
				<article>
					<h2 className="about__title">{about.title}</h2>
					<Row className="about__row">
						<Col span={8} className="about__foto"><img src={foto} alt="Фото" /></Col>
						<Col span={16} className="about__text">
							<div className="about__subtitle">{about.subtitle}</div>
						</Col>
					</Row>
				</article>
				<div className="arrow" onClick={scroll_}><div><span></span></div></div>
			</div>
		</section>
	)
}

export default AboutMe;