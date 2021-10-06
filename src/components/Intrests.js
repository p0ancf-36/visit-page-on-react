import React from 'react';
import { ElementArray } from '../scripts/utilities';
import { withSubscription } from '../scripts/scrollEvent';
import data from '../scripts/data';

const intrests = data.intrests;

const Intrests = () => (
	<div className="intrests">
		<h2 className="intrests__title">Мои интересы</h2>
		{
			ElementArray(intrests.elements.length, index => <IntrestsItem index={index} key={index} />)
		}
	</div>
);

const IntrestsItem = ({ index }) => {
	const margin = 0;
	const className = "_active";

	function callback(DOMnode) {
		const rect = DOMnode.current.getBoundingClientRect();
		if (
			rect.bottom - margin >= 0 &&
			rect.top + margin <= window.innerHeight
		) {
			DOMnode.current.classList.add(className);
		} else {
			DOMnode.current.classList.remove(className);
		}
	}

	const item = React.forwardRef((props, ref) => (
		<div
			{...props}
			ref={ref}
			className="intrests__item">
			<h2 className="intrests__item-title">{intrests.elements[index].title}</h2>
			<div className="intrests__item-content">{intrests.elements[index].content}</div>
		</div>
	))
	const SubscribedItem = withSubscription(item, callback);

	return <SubscribedItem />;
}

export default Intrests;