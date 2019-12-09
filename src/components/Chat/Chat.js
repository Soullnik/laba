import React, { Component } from 'react';
import classes from './Chat.module.css';
import Messages from "../Message/Messages";
import Input from "../UI/Input-Chat/input-Chat";


function randomName() {
  const adjectives = [
    "Лозицкий", "Степанов", "Кавчук", "Суков", "Лебедев", "Захарьев", "Захаров", "Приставка",
    "Дембелев", "Тугодумов", "Апостолов", "Гамырдин",
  ];
  const nouns = [
    "Николай", "Антон", "Валерий", "Жамшут", "Евгений", "Владимир", "Дмитрий", "Андрей",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + ' ' + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class Chat extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("dxUXq7UDRv0vQB42", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  render() {
    const cls = [classes.Chat]

    if (!this.props.isOpenn) {
      cls.push(classes.close)}
    
      return (
       
        <div className={cls.join(' ')}>
          <div className={classes.Chatheader}
          >
        <h1>Чат</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }
  

}

export default Chat;