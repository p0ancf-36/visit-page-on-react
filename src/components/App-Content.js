import React from 'react';

import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';

import AboutMe from './About-Me';
import Intrests from './Intrests';
import Projects from './Projects';
import info from '../info';

const intrests = info.intrests;

const AppContent = () => (
	<>
		<AboutMe/>
		<Intrests/>
		<Projects/>
	</>
);

export default AppContent;