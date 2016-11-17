import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/items';
import Card from "./Card";

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
    const { items, deleteItem } = this.props;
    console.log(items);
    return (
      <div id="items-div">
        <h2 id="items-title">My Cards</h2>
        <ul id="individual-items">
          { (items.data).map((item, index) => {
              return (
                <div id="item-container">
                  <Card question={item.question}
                        answer={item.answer}
                        mnemonic={item.mneumonic}
                        uid={item.uid}
                        image={item.image} />
                </div>
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
