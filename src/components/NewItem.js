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
        <label>Title:</label>
        <input id="title" type="text" name="title" placeholder="Item Name" />
        <label>Total Cost:</label>
        <input id="cost" type="text" name="cost" placeholder="e.g. $10.00" />

        <button
          disabled={(auth.status !== 'LOGGED_IN')}
          onClick={e => submitNewItem({
              user: auth.username,
              title: $('#title').val(),
              cost: $('#cost').val(),
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
