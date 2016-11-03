import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/items';

export class ItemsList extends React.Component {

  componentWillReceiveProps(nextProps) {
    const { fetchAllItems, auth } = this.props;
    const currentAuthStatus = auth.status;
    const incomingAuthStatus = nextProps.auth.status;

    if (incomingAuthStatus !== currentAuthStatus && incomingAuthStatus === 'LOGGED_IN') {
      fetchAllItems();
    }
  }

  render() {
    const { items } = this.props;
    return (
      <div id="itemsDiv">
        <h2>Items:</h2>
        <ul>
          { (items.data).map((item, index) => {
              return (
                <li key={index}>
                  <p><strong>Question: </strong>{item.question}</p>
                  <p><strong>Answer: </strong>{item.answer}</p>
                  <p><strong>Mneumonic Device: </strong> {item.mneumonic}</p>
                  <img role="presentation" src={item.imageURL} />
                  <button id="deleteButton">Delete</button>
                </li>
              );
            })
          }
        </ul>
      </div>);
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
