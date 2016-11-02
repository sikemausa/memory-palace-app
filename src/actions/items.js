import firebase from 'firebase';
const splitObject = require('split-object');
import { userUid, username } from './auth';

let firebaseItems;

function fetchAllItems() {
  return (dispatch, getState) => {
    let fetchedItems = [];
    firebaseItems = firebase.database().ref(`/${username}/${userUid}/items`);
    firebaseItems.once('value').then(result => {
      result.forEach(item => {
        fetchedItems.push(item.val());
      });

      dispatch({
        type: 'RECEIVE_ALL_ITEMS',
        items: fetchedItems
      });
    });
  };
}

function submitNewItem(itemData) {
  return (dispatch) => {
    let newItemKey = firebaseItems.push().key;

      firebaseItems.child(newItemKey).set(itemData)
      .then(() => {
        dispatch({
          type: 'RECEIVE_NEW_ITEM',
          item: itemData
        });
      })
      .catch(error => {
        console.log("Error saving item: ", error);
      });
  };
}

export {
  fetchAllItems,
  submitNewItem
};
