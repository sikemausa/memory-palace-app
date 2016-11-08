import firebase from 'firebase';
import { userUid, username } from './auth';

let firebaseItems;
const firebaseImages = firebase.storage().ref('images');

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
        uid
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
      // if itemData.image.name do the following, else do it without the image part
      if(itemData.image){
        firebaseImages.child(itemData.image.name).put(itemData.image).then(result => {
        itemData.image = result.downloadURL;
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
    });
      }
      else {
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
      }
};
}

export {
  fetchAllItems,
  submitNewItem,
  deleteItem
};
