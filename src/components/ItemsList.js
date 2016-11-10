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
    const { items, deleteItem } = this.props;
    return (
      <div id="items-div">
        <h2 id="items-title">My Cards</h2>
        <ul>
          { (items.data).map((item, index) => {
              let uid = item.uid;
              return (
                <li id="item" key={index}>
                  <button id="delete-button" onClick={() => deleteItem(uid)}>Delete</button>
                  <p onClick={ e => this.setState({isEditing: true})}>
                    <span className="label">Question:</span> {item.question}
                  </p>
                  <p onClick={ e => this.setState({isEditing: true})}>
                    <span className="label">Answer:</span> {item.answer}
                  </p>
                  <p onClick={ e => this.setState({isEditing: true})}>
                    <span className="label">Mneumonic Device:</span>  {item.mneumonic}
                  </p>
                  <p>
                    <span className="label">Visual Hint:</span>
                    <img role="presentation" src={item.image} />
                  </p>
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
