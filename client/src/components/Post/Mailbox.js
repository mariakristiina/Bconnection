import Moment from 'react-moment';
import 'moment-timezone';
import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link, NavLink, Route } from "react-router-dom";
import MailboxDetail from "./MailboxDetail";
import { getMessages } from "./messageFunctions";
import("./PostCss/newMainBox.css")

class Mailbox extends Component {
  state = {
    //receivedMessages: [],
    sentMessages: [],
    showDetail: false,
    detailMessage: []
  };

  componentDidMount() {
    console.log(this.props.match.params);
    getMessages(this.props.user._id)
      .then(res => {
        this.setState({
          sentMessages: res.data
        });
      })
      .catch(err => console.log(err));

    /*getReceivedMessages(this.props.user._id).then(res => {
      this.setState({
        receivedMessages: res.data
      });
    });*/
  }

  render() {
    const { sentMessages, receivedMessages } = this.state;
    console.log("tst", sentMessages, receivedMessages);
  

    return (

      <div>
        {sentMessages.map(msg => {
console.log(msg);
          return (
            <div >
              <Link
                to={`/mailbox/detail/${msg._id}`}
                key={msg._id}>
                <div className="mailBox conversation">
                  <h3 className="messageTitle">{msg.subject.title}</h3>
                  <div className="messageContainer">
                  {this.props.user._id === msg.subject.owner ?
                  <p className="messageText">conversation with {msg.owner.username}</p> 
                  :
                  <p className="messageText">conversation with {msg.recipient.username}</p> 
                  }
                </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

    );
  }
}

export default Mailbox;
