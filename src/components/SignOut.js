import React, {Component} from 'react';
import firebase, {provider} from '../firebase';

export default function ({user}) {

  return (
      <button className="SignOut" onClick={() => firebase.auth().signOut()}>
        Sign Out
      </button>
  )
}
