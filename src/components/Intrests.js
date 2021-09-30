import React from 'react';

import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';

import info from '../scripts/info';

const intrests = info.intrests;

const Intrests = () => (
	<Row className="intrests" gutter={[10, 10]}>
		<Col span="24" className="intrests__title">Мои интересы</Col>
		{
			new Array(info.intrests.rows.length)
				.fill(null)
				.map((_, index) => (
					<Col span={24} key={index}>
						<Row
							className="intrests__row row"
							gutter={[10, 10]}
							key={index}>
							{
								new Array(info.intrests.rows[index].length)
									.fill(null)
									.map((_, jndex) => (
										<Col
											span={24 / info.intrests.rows[index].length}
											key={index * info.intrests.rows.length + jndex}
											className="">
											<div className="intrests__item">
												<h2 className="intrests__item-title">{intrests.rows[index][jndex].title}</h2>
												<div className="intrests__item-content">{intrests.rows[index][jndex].content}</div>
											</div>
										</Col>
									))
							}
						</Row>
					</Col>
				))
		}
	</Row>
);

export default Intrests;