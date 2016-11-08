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
    console.log(items);
    return (
      <div id="items-div">
        <h2 id="items-title">My Cards</h2>
        <ul>
          { (items.data).map((item, index) => {
              let uid = item.uid;
              let image;
              if(item.image) {image = item.image;}
              else if (item.imageURL) {image = item.imageURL;}
              return (
                <li id="item" key={index}>
                  <button id="delete-button"
                           onClick={() => deleteItem(uid)}>Delete</button>
                  <p><span className="label">Question:</span> {item.question}</p>
                  <p><span className="label">Answer:</span> {item.answer}</p>
                  <p><span className="label">Mneumonic Device:</span>  {item.mneumonic}</p>
                    <p><span className="label">Visual Hint:</span>
                    <img role="presentation" src={image} /></p>
                    <p><span className="label">Visual Hint:</span>
                    <img role="presentation" src={image} /></p>
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
