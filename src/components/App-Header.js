import React from 'react';

import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';

import '../css/Header.css';
import info from '../info';

const menu = info.menu;
const { Header, Content, Footer } = Layout;

const AppHeader = () => (
		<Header className="menu">
			<img src={menu.logo_src} alt="logo" className="logo"/>
			<Menu mode="horizontal" theme="dark">
				{
				new Array(menu.elements.length)
						.fill(null)
						.map((value, index) => (<Menu.Item key={index}>{menu.elements[index]}</Menu.Item>))
				}
			</Menu>
		</Header>
);

export default AppHeader;