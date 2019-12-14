import Moment from 'react-moment';
import 'moment-timezone';
import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReplyMailbox from "./ReplyMailbox";
import("./PostCss/newMainBox.css");



class MailboxDetail extends Component {
  state = {
    message: null,
    content: "",
    comment: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getMailboxDetail() {
    const id = this.props.match.params.messageId;
    console.log(id);
    axios
      .get(`/messages/detail/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          message: response.data,
          comment: response.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.messageId;

    axios
      .post("/messages/add", {
        id: id,
        content: this.state.content,
        subject: this.state.message.subject._id,
        owner: this.props.user._id,
        // recipient: this.state.message.recipient._id
      })
      .then(message => {
        console.log(message);
        this.setState({
          content: "",
        });
        this.getMailboxDetail();
        //this.props.history.push(`/mailbox/${this.state.post.owner._id}`);
      });
  };


  componentDidMount() {
    this.getMailboxDetail();
  }

  // getCommentDetail() {
  //   const id = this.state.message.comments;
  //   console.log(this.state.message.comments)
  //   console.log(id);
  //   axios
  //     .get(`/messages/detail/comment${id}`)
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({
  //         comment: response.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getMailboxDetail();
      // this.getCommentDetail();
    }
  }

  render() {

    if (this.state.message === null) {
      return <div></div>;
    }

 let comments = this.state.message.comments.map(comment => {
      console.log(comment.subject)
      console.log(this.state.message)
      if(this.props.user._id === comment.owner) {
      return (
        <div className="comments2">
            <p className="message1">{comment.content}</p>
        <Moment className="date">{comment.created_at}</Moment>
        </div>
      )} else {
        return (
          <div className="comments">
              <p className="message1">{comment.content}</p>
          <Moment className="date">{comment.created_at}</Moment>
          </div>
        )
      }
    });

    return (
<div>
      <div className="containerForSentMessages">
        <div className="comments">
        <p className="message1">{this.state.message.content}</p>
          <Moment className="date">{this.state.message.created_at}</Moment>
        </div>

        {comments}
        </div>
        <form className="sendMessage" onSubmit={this.handleSubmit}>
            {/* <Form.Label className="profLabel">Answer</Form.Label> */}
            <input
              className="formSubmit"
              as="textarea"
              rows="3"
              name="content"
              onChange={this.handleChange}
            />
            <button className="button messageButton">Send</button>
        </form>
      </div>
    ) 
  }
}

export default MailboxDetail;


// style={{ marginLeft: "40%" }}