import firebase from 'firebase';
import { userUid, username } from './auth';

let firebaseItems;

function fetchAllItems() {
  return (dispatch, getState) => {
    let fetchedItems = [];
    firebaseItems = firebase.database().ref(`/${userUid}/${username}/items`);
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

const deleteItem = (uid) =>{
  return (dispatch, getState) => {
    firebase.database().ref(`/${userUid}/${username}/items/${uid}`).remove().then(() => {
      dispatch({
        type:'DELETE_ITEM',
        deleteItem: uid
      });
    }).catch(error => {
      console.log('error deleting recommendation');
      console.log(error);
    });
  };
};

function submitNewItem(itemData) {
  return (dispatch) => {
    let newItemKey = firebaseItems.push().key;
      itemData.uid = newItemKey;
      firebaseItems.child(newItemKey).set(itemData)
      .then(() => {
        dispatch({
          type: 'RECEIVE_NEW_ITEM',
          item: itemData
        });
      })
      .then(console.log(itemData))
      .catch(error => {
        console.log("Error saving item: ", error);
      });
  };
}

export {
  fetchAllItems,
  submitNewItem,
  deleteItem
};
