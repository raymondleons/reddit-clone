import React, { Component } from 'react'
import {Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Row,
  UncontrolledAlert,
  Col
} from 'reactstrap'
import uuidv4 from 'uuid/v4';
import {connect} from 'react-redux'
import { getTopics, storeTopic, upVoteTopic, downVoteTopic } from '../actions/topicActions';

// Components
import Topic from './Topic'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title:'',
      msg: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
		this.props.getTopics();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ msg: nextProps.topics.msg });
		setTimeout(() => this.setState({ msg: '' }), 5000);
}

  toggle = () => this.setState({ modal: !this.state.modal });

  changeHandle = (e) => this.setState({ [e.target.name]: e.target.value });

	submitHandle = (e) => {
		e.preventDefault();
		const { title } = this.state,
			data = { id: uuidv4(), title, upvote: 0, downvote: 0 };
		title.length < 255
			? this.props.storeTopic(data)
			: this.setState({ msg: 'Max Title Length is 255' }, () =>
					setTimeout(() => this.setState({ msg: '' }), 5000)
				);
		this.setState({ title: '' });
		this.toggle();
  };
  
  upVoteHandle = (id) => {
		this.props.upVoteTopic(id);
	};

	downVoteHandle = (id) => {
		this.props.downVoteTopic(id);
};


  render() {
    const { topics, success } = this.props.topics,
        { msg } = this.state;


    return (
      <div className="header">
            <h2>Hi, Friends!</h2> <p>What do you want to share on Reddit?</p>
            <hr/>
            <h6><i>Vote on your favourite topics below. Top topics are shown below and far left</i></h6>
            <Button color="primary" style={{marginTop:"10px", marginBottom:"10px"}} onClick={this.toggle}> Create a topic</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <Form onSubmit={this.submitHandle}>
                <ModalHeader toggle={this.toggle}>Topic title</ModalHeader>
                <ModalBody>
                    <Input
                          placeholder="Type your topic here.."
                          value={this.state.title}
                          name="title"
                          onChange={this.changeHandle}
          />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="submit">Add Topic</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
               </Form>   
        </Modal>
            <hr/>
            {msg && (
					<Row
						style={{
							position: 'fixed',
							bottom: '10px',
							left: '10px',
							right: '10px',
							width: '100%',
							zIndex: '9999'
						}}
					>
						<Col>
							<UncontrolledAlert color={success ? 'info' : 'danger'}>{msg}</UncontrolledAlert>
						</Col>
					</Row>
				)}
				{topics && (
					<Topic
						topics={topics.sort((b, a) => parseInt(a.upvote) - parseInt(b.upvote))}
						addHandle={this.toggle}
						upVoteHandle={this.upVoteHandle}
						downVoteHandle={this.downVoteHandle}
					/>
)}
      </div>
    )
  }
}

const actionCreators = {
	getTopics,
	storeTopic,
	upVoteTopic,
	downVoteTopic
};

const mapStateToProps = (state) => ({
	topics: state.topics
});

export default connect(mapStateToProps, actionCreators)(Homepage);
