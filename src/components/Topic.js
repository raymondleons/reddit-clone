import React from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';

const Topic = (props) => {
	const addTopic = (
		<Col className="my-3" lg={3} md={3} sm={6} onClick={props.addHandle}>
			
		</Col>
	);

	return (
		<Row>
			{props.topics &&
				props.topics.map(
					(topic, i) =>
						i < 20 && (
							<Col className="my-3" lg={3} md={3} sm={6} key={topic.id}>
								<Card style={{ height: '210px' }}>
									<CardBody>
										<h4 className="text-center">{topic.title}</h4>
										<CardText className="d-flex mt-5">
											<span
												className="ml-auto"
												style={{ position: 'relative', right: '50px' }}
												onClick={() => props.upVoteHandle(topic.id)}
											>
												<i className="fa fa-2x fa-thumbs-up" style={{ color: 'blue' }} />
												{topic.upvote}
											</span>
											<span
												className="mr-auto"
												style={{ position: 'relative', left: '50px' }}
												onClick={() => props.downVoteHandle(topic.id)}
											>
												<i className="fa fa-2x fa-thumbs-down" style={{ color: 'red' }} />
												{topic.downvote}
											</span>
										</CardText>
									</CardBody>
								</Card>
							</Col>
						)
				)}
			{addTopic}
		</Row>
	);
};

export default Topic;