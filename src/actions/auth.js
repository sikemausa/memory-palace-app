import firebase, { provider } from '../firebase';

let userUid;
let username;

function startListeningToAuth() {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(authData => {
      if (authData) {
        username = authData.displayName;
        userUid = authData.uid;
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
}

function logIn() {
  return (dispatch) => {
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
}


function logOut() {
  return (dispatch,) => {
    dispatch({
      type: 'LOGOUT'
    })

    firebase.auth().signOut()
    .then(() => {
      console.log('Sign out successful!')
    })
    .catch(error => {
      console.log('SIGN OUT ERROR: ', error);
    });
  }
};

export {
  startListeningToAuth,
  logIn,
  logOut,
  userUid,
  username
};
