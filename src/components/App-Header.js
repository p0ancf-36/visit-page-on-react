import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';

import { ElementArray } from '../scripts/utilities';
import data from '../scripts/data';

const menu = data.menu;
const logo = require(`../img/${menu.logo_name}`).default;

const AppHeader = () => {
	return (
		<>
			<div className="header__logo logo">
				<img src={logo} alt="logo" className="logo__icon icon" />
				<h1 className="logo__title title">
					p0ancf-36
				</h1>
			</div>
			<Menu mode="horizontal" className="header__menu menu" selectable={false} activeKey={[]}>
				{
					ElementArray(menu.elements.length, i => <MenuItem key={i} index={i} href={menu.elements[i].url} />)
				}
			</Menu>
		</>
	)
};

const MenuItem = ({ index = 0, href }) => {
	const [anchor, setAnchor] = useState(null);

	useEffect(() => {
		setAnchor(document.querySelector(href));
	}, [anchor, href])

	function handleClick() {
		anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<Menu.Item onClick={handleClick}>
			<button className="menu-item">
				{menu.elements[index].text}
			</button>
		</Menu.Item>
	)
}

export default AppHeader;