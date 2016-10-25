import React, {Component} from 'react';
import firebase, {provider} from '../firebase';

export default function ({user}) {

  return (
    <section className="UserInformation">
      <button className="SignOut" onClick={() => firebase.auth().signOut()}>
        Sign Out
      </button>
    </section>
  )
}
