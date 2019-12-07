import {Component} from "react";
import React from "react";
import Button from '../Button/Button'
import classes from './Input_Chat.module.css'
class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className= {classes.Input}>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Введите сообщение"
            autofocus="true"
          />
          <Button onClck={this.props.onRetry}
          type="success">Отправить</Button>
        </form>
      </div>
    );
  }
}

export default Input;