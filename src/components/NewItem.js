import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import $ from "jquery";

import * as actions from "../actions/items";

export class NewItem extends React.Component {
  constructor(){
    super();
    this.state = {
      question: "",
      answer: "",
      mnemonic: "",
      image: "",
      clearButtonDisabled: true,
      submitButtonDisabled: true
    };
  }

  checkInputs() {
    if(this.state.question || this.state.answer || this.state.mnemonic || this.state.image){
      this.setState({clearButtonDisabled: false, submitButtonDisabled: false});
    }
    else this.setState({clearButtonDisabled: true, submitButtonDisabled: true});
      if(this.state.question && this.state.answer && this.state.mnemonic){
      this.setState({ submitButtonDisabled: false });
    }
    else this.setState({ submitButtonDisabled: true });
  }

  clearInputs() {
    this.setState({
      question: "",
      answer: "",
      mnemonic: "",
      image: "",
      clearButtonDisabled: true
    });
  }

  render() {
    const { auth, submitNewItem } = this.props;

    return (
      <div id="new-item">
        <h2>Create New Flashcard:</h2>
        <input id="question"
                type="text"
                name="question"
                placeholder="Question"
                value={this.state.question}
                onKeyUp={e => this.checkInputs()}
                onChange={e => this.setState({question: e.target.value})}
                />
        <input id="answer"
               type="text"
               name="answer"
               placeholder="Answer"
               value={this.state.answer}
               onChange={e => this.setState({answer: e.target.value})}
               onKeyUp={e => this.checkInputs()}
               />
        <input id="mneumonic"
               type="text"
               name="mnemonic"
               placeholder="Mnemonic Device"
               value={this.state.mnemonic}
               onChange={e => this.setState({mnemonic: e.target.value})}
               onKeyUp={e => this.checkInputs()}
               />
          <input id="image"
                 type="file"
                 name="image"
                 onChange={e => this.setState({image: $("#image").get(0).files[0]})}
 />
          <p id="image-error" hidden="true">Please select an image to upload</p>

        <button
          id="submit-button"
          disabled={this.state.submitButtonDisabled}
          onClick={e => submitNewItem({
              user: auth.username,
              question: this.state.question,
              answer: this.state.answer,
              mneumonic: this.state.mnemonic,
              image: this.state.image,
              uid: ""
            })
          }
        >Create</button>
        <button id="clear-button"
                disabled={this.state.clearButtonDisabled}
                onClick={e => this.clearInputs()}
                >Clear</button>
    </div>);
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
