import React from 'react';
import { ElementArray } from '../scripts/utilities';
import { subscribeToVeiwportChange } from '../scripts/scrollEvent';
import { animateScroll } from '../scripts/utilities';
import data from '../scripts/data';

const intrests = data.intrests;

const Intrests = () => {
	function scroll_() {
		animateScroll({ targetPosition: window.innerHeight - 20, initialPosition: window.scrollY, duration: 1000 });
	}

	return (
		<section className="intrests content-element" id="intrests">
			<h2 className="intrests__title">Мои интересы</h2>
			{
				ElementArray(intrests.elements.length, index => <IntrestsItem index={index} key={index} className={index & 1 ? "left" : "right"} />)
			}
			<div className="arrow" onClick={scroll_}><div><span></span></div></div>
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
		<div
			{...props}
			ref={ref}
			className={"intrests__item " + className}>
			<h2 className="intrests__item-title">{intrests.elements[index].title}</h2>
			<div className="intrests__item-content">{intrests.elements[index].content}</div>
		</div>
	))
	const SubscribedItem = subscribeToVeiwportChange(item, callback);

	return <SubscribedItem {...other} />;
}

export default Intrests;