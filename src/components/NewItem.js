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
        <h2>Submit New Item:</h2>
        <label>Question:</label>
        <input id="question" type="text" name="question" placeholder="Question" />
        <label>Answer:</label>
        <input id="answer" type="text" name="answer" placeholder="Answer" />
        <label>Mneumonic Device:</label>
        <input id="mneumonic" type="text" name="mneumonic" placeholder="Mneumonic Device" />
        <label>Image URL:</label>
        <input id="imageURL" type="text" name="imageURL" />

        <button
          disabled={(auth.status !== 'LOGGED_IN')}
          onClick={e => submitNewItem({
              user: auth.username,
              question: $('#question').val(),
              answer: $('#answer').val(),
              mneumonic: $('#mneumonic').val(),
              imageURL: $('#imageURL').val()
            })
          }
        >Submit Item</button>
    </div>);
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
