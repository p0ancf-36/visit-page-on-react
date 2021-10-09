import React from 'react';
import { ElementArray } from '../scripts/utilities';
import headerData from '../scripts/data/header-data';
import AnchorLink from './utils/AnchorLink';
import { Menu } from 'antd';

const logo = require(`../img/${headerData.logoName}`).default;

const AppHeader = ({ className = "", margin = 0 }) => {
	return (
		<>
			<div className="header__logo logo">
				<img src={logo} alt="logo" className="logo__icon icon" />
				<h1 className="logo__title title">
					p0ancf-36
				</h1>
			</div>
			<Menu mode="horizontal" activeKey="" selectable={false} selectedKeys={[]} className="header__menu menu">
				{ElementArray(headerData.menuItems.length, i => <MenuItem key={i} index={i} margin={margin} href={headerData.menuItems[i].href} />)}
			</Menu>
		</>
	)
};

const MenuItem = ({ index = 0, margin = 0, href }) => {
	return (
		<Menu.Item className="menu__item">
			<AnchorLink anchorQuery={href} className="menu__item-link" margin={margin}>
				{headerData.menuItems[index].name}
			</AnchorLink>
		</Menu.Item>
	)
}

export default AppHeader;