import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';

import * as actions from '../actions/items';

export class NewItem extends React.Component {
  render() {
    const { auth, submitNewItem } = this.props;

    return (
      <div id="new-item">
        <h2>Create New Flashcard:</h2>
        <input id="question" type="text" name="question" placeholder="Question" />
        <input id="answer" type="text" name="answer" placeholder="Answer" />
        <input id="mneumonic" type="text" name="mneumonic" placeholder="Mneumonic Device" />
        <input id="imageURL" type="text" name="imageURL" placeholder="Image URL" />

        <button
          id="submit-button"
          disabled={(auth.status !== 'LOGGED_IN')}
          onClick={e => submitNewItem({
              user: auth.username,
              question: $('#question').val(),
              answer: $('#answer').val(),
              mneumonic: $('#mneumonic').val(),
              imageURL: $('#imageURL').val()
            })
          }
        >Create</button>
    </div>);
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
