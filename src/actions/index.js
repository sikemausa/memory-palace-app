import firebase, { provider } from '../firebase';

export const addItem = (id, picture, question, answer, device) => {
  return {
    type: "ADD_ITEM",
    id,
    picture,
    question,
    answer,
    device
  };
};

export const addText = (text) => {
  return {
    type: "ADD_TEXT",
    text
  };
};

export const startListeningToAuth = (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(authData => {
      if (authData) {
        dispatch({
          type: 'LOGIN',
          uid: authData.uid,
          username: authData.displayName
        });
      } else {
        if (getState().auth.status !== 'ANONYMOUS') {
          dispatch({
            type: 'LOGOUT'
          });
        }
      }
    });
  };

export const logIn = (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });

    firebase.auth().signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: 'LOGIN',
        uid: result.user.uid,
        username: result.user.displayName
      });
    })

    .catch(error => {
      console.log('Error logging in: ', error);
    });
};

export const logOut = (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    });
    firebase.auth().signOut()
    .then(() => {
      console.log('Sign out successful!');
    })
    .catch(error => {
      console.log('SIGN OUT ERROR: ', error);
    });
};
