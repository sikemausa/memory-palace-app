 import React, {Component} from 'react';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      questionValue: '',
      answerValue: '',
      mneumonicValue: ''
    };
  }

  handleAddItem() {

  }

  handleExitCreator() {

  }

  render(){
    return(
      <div id="create-new-palace">
        <div id="add-image"><span id="+">+</span> Add Image</div>
        <input type="text"
               placeholder="Question"
               value={this.state.questionValue}
               onChange={ e => this.setState({ questionValue: e.target.value })}
               />
        <input type="text"
               placeholder="Answer"
               value={this.state.answerValue}
               onChange={ e => this.setState({ answerValue: e.target.value })}
              />
        <input type="text"
               placeholder="Menumonic Device"
               value={this.state.mneumonicValue}
               onChange={ e => this.setState({ mneumonicValue: e.target.value })}
               />
        <button id="add-item">+</button>
        <button id="exit-creator">Exit</button>
      </div>
    );
  }
}
