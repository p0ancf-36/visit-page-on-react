import React from 'react';

import { Menu } from 'antd';

import info from '../info';
const menu = info.menu;
const logo = require(`../img/${menu.logo_name}`).default;

// console.log(process.env.PUBLIC_URL + "img/" + menu.logo_name);

const AppHeader = () => (
	<>
		<div className="header__logo logo">
			<img src={logo} alt="logo" className="logo__icon icon" />
			<h1 className="logo__title title">
				p0ancf-36
			</h1>
		</div>
		<Menu mode="horizontal" theme="light" className="header__menu menu">
			{
				new Array(menu.elements.length)
					.fill(null)
					.map((value, index) => (<Menu.Item key={index}>{menu.elements[index]}</Menu.Item>))
			}
		</Menu>
	</>
);

export default AppHeader;