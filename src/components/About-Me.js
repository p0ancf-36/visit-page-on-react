import React from 'react';
import { Row, Col } from 'antd';

import data from '../scripts/data';

const about = data.about;
const foto = require(`../img/${about.foto_name}`).default;

const AboutMe = (props) => (
	<>
		<Row className={"about " + props.className}>
			<Col span={8} className="about__foto"><img src={foto} alt="Фото" /></Col>
			<Col span={16} className="about__text">
				<h2 className="about__title divider-h">{about.title}</h2>
				<div className="about__subtitle">{about.subtitle}</div>
			</Col>
		</Row>
	</>
);

export default AboutMe;