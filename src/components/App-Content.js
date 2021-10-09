import React from 'react';

import AboutMe from './About-Me';
import Intrests from './Intrests';
import Projects from './Projects';

const AppContent = ({ ...other }) => (
	<>
		<AboutMe />
		<Intrests />
		<Projects />
	</>
);

export default AppContent;