import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as actions from '../actions/items';

export class NewItem extends React.Component {

  clearInputs() {
    $('#question').val("");
    $('#answer').val("");
    $('#mneumonic').val("");
    $('#imageURL').val("");
    $('#image').val("");
  }

  enableClearButton() {
    if($('#question').val()) $('#clear-button').removeAttr('disabled');
    else $('#clear-button').attr('disabled', true);
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
                onKeyUp={e => this.enableClearButton()}
                />
        <input id="answer" type="text" name="answer" placeholder="Answer" />
        <input id="mneumonic" type="text" name="mnemonic" placeholder="Mnemonic Device" />
        <div id="image-inputs">
          <input id="imageURL" type="text" name="imageURL" placeholder="Image URL" />
          <span id="or">OR</span>
          <input id="image" type="file" name="image" />
        </div>

        <button
          id="submit-button"
          disabled={(auth.status !== 'LOGGED_IN')}
          onClick={e => submitNewItem({
              user: auth.username,
              question: $('#question').val(),
              answer: $('#answer').val(),
              mneumonic: $('#mneumonic').val(),
              imageURL: $('#imageURL').val(),
              image: $('#image').get(0).files[0],
              uid: ''
            })
          }
        >Create</button>
        <button id="clear-button"
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
