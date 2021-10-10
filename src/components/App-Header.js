import React from 'react';
import { Menu, Row, Col } from 'antd';
import AnchorLink from './utils/AnchorLink';
import { ElementArray } from '../scripts/utilities';
import data from '../scripts/data';
import headerData from '../scripts/data/header-data';

const logo = require(`../img/${headerData.logoName}`).default;

const AppHeader = ({ className = "" }) => {
	return (
		<>
			<Row justify="space-between">
				<Col className="header__logo logo">
					<img src={logo} alt="logo" className="logo__icon icon" />
					<h1 className="logo__title title">
						p0ancf-36
					</h1>
				</Col>
				<Col>
					<Menu
						mode="horizontal"
						activeKey=""
						selectable={false}
						selectedKeys={[]}
						className="header__menu menu"
					>
						{ElementArray(headerData.menuItems.length, i => <MenuItem key={i} index={i} href={headerData.menuItems[i].href} />)}
					</Menu>
				</Col>
			</Row>
		</>
	)
};

const MenuItem = ({ index = 0, href }) => {
	return (
		<Menu.Item className="menu__item">
			<AnchorLink anchorQuery={href} className="menu__item-link" margin={data.margin}
			>
				{headerData.menuItems[index].name}
			</AnchorLink>
		</Menu.Item>
	)
}

export default AppHeader;