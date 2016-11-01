import firebase from 'firebase';
const splitObject = require('split-object');

// let currentUser = firebase.auth().authData.uid;
const firebaseItems = firebase.database().ref(`/items`);

function fetchAllItems() {
  return (dispatch, getState) => {
    let fetchedItems = [];
    let items;
    firebaseItems.on('value', (snapshot) => {
        items = snapshot.val();
        items = splitObject(items).map(item => Object.assign({
          key: item.key
        }, item.value));
        console.log(items);
      });


    // firebaseItems.once('value').then(result => {
    //   result.forEach(item => {
    //     fetchedItems.push(item.val());
    //   });

      dispatch({
        type: 'RECEIVE_ALL_ITEMS',
        items: items
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
