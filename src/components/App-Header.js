import React from 'react';

import { Menu } from 'antd';

import data from '../scripts/data';
const menu = data.menu;
const logo = require(`../img/${menu.logo_name}`).default;

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
					.map((value, index) => (
						<Menu.Item key={index}>
							<a href={menu.elements[index].url}>
								{menu.elements[index].text}
							</a>
						</Menu.Item>
					))
			}
		</Menu>
	</>
);

export default AppHeader;