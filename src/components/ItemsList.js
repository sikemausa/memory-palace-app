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
    const { items, submitNewItem } = this.props;
    return (
      <div id="items">
        <h2>Items:</h2>
        <ul>
          { (items.data).map(item => {
              return (
                <li>
                  <p><strong>Title: </strong>{item.title}</p>
                  <p><strong>Uploaded By: </strong>{item.user}</p>
                  <p><strong>Cost: </strong> {item.cost}</p>
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
