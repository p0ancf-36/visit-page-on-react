import React from 'react';
import { ElementArray } from '../scripts/utilities';
import { subscribeToVeiwportChange } from '../scripts/scrollEvent';

import data from "../scripts/data";
import intrestsData from '../scripts/data/intrests-data';
import AnchorLink from './utils/AnchorLink';

const Intrests = () => {
	return (
		<section className="intrests divider-h" id="intrests">
			<div>
				<h2 className="intrests__title title">Мои интересы</h2>
				<ul className="intrests__list">
					{
						ElementArray(
							intrestsData.intrests.length,
							index => <IntrestsItem
								index={index}
								key={index}
								className={index & 1 ? "left" : "right"}
							/>
						)
					}
				</ul>
			</div>
			<AnchorLink className="arrow" anchorQuery="#projects" margin={data.margin}><div><span></span></div></AnchorLink>
		</section>
	)
};

const IntrestsItem = ({ index, className, ...other }) => {
	const margin = -20;
	const toggleClassName = "_active";

	function callback(DOMnode) {
		const rect = DOMnode.current.getBoundingClientRect();
		if (
			rect.bottom - margin >= 0 &&
			rect.top + margin <= window.innerHeight
		) {
			DOMnode.current.classList.add(toggleClassName);
		} else {
			DOMnode.current.classList.remove(toggleClassName);
		}
	}

	const item = React.forwardRef((props, ref) => (
		<li
			{...props}
			ref={ref}
			className={"intrests__item " + className}>
			<h2 className="intrests__item-title">{intrestsData.intrests[index].title}</h2>
			<div className="intrests__item-content">{intrestsData.intrests[index].decs}</div>
		</li>
	))
	const SubscribedItem = subscribeToVeiwportChange(item, callback);

	return <SubscribedItem {...other} />;
}

export default Intrests;