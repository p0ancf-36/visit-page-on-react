import React from 'react';

import AboutMe from './About-Me';
import Intrests from './Intrests';
import Projects from './Projects';

const AppContent = () => (
	<div className="container">
		<AboutMe className="divider-h" />
		<Intrests />
		<Projects />
	</div>
);

export default AppContent;