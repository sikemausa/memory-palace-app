import firebase from 'firebase';

const firebaseImages = firebase.storage().ref('images');
const firebaseItems = firebase.database().ref('items');

function fetchAllItems() {
  return (dispatch, getState) => {
    let fetchedItems = [];

    firebaseItems.once('value').then(result => {
      result.forEach(item => {
        fetchedItems.push(item.val());
      });

      dispatch({
        type: 'RECEIVE_ALL_ITEMS',
        items: fetchedItems
      });
    });
  }
}

function submitNewItem(itemData) {
  return (dispatch) => {

    // create a new unique key to store our expense data under
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
