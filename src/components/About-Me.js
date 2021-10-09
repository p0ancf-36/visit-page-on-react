import React from 'react';

import data from "../scripts/data";
import aboutMeData from '../scripts/data/about-me-data';
import AnchorLink from './utils/AnchorLink';

const foto = require(`../img/${aboutMeData.fotoName}`).default;
const bg = require(`../img/${aboutMeData.bgUrl}`).default;

const AboutMe = () => {
	return (
		<section className="about" style={{ backgroundImage: `url(${bg})` }} id="about">
			<div className="container">
				<article>
					<h2 className="about__title title">{aboutMeData.name}</h2>
					<div className="about__row">
						<div className="about__foto"><img src={foto} alt="Фото" /></div>
						<div className="about__text">
							<div className="about__subtitle">{aboutMeData.desc}</div>
						</div>
					</div>
				</article>
			</div>
			<AnchorLink className="arrow" anchorQuery="#intrests" margin={data.margin}><div><span></span></div></AnchorLink>
		</section>
	)
}

export default AboutMe;