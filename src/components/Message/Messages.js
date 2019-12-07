import {Component} from "react";
import React from "react";
import classes from './Message.module.css'
class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className={classes.Messageslist}>
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
      <span
        className={classes.avatar}
        // style={{backgroundColor: member.clientData.color}}
      />
        <div className={classes.Messagecontent}>
          <div className={classes.username}>
            {member.clientData.username}
          </div>
          <div className={classes.text}>{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;