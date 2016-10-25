import React, { Component } from 'react';
import firebase, { provider } from '../firebase';

export default class SignIn extends Component {

  render() {
    return (
      <section className="SignIn">
        <h1 className="SignIn-title">Memory Palace</h1>
        <article className="Gains-Logo"></article>
        <button
          className="SignInButton"
          onClick={() => firebase.auth().signInWithPopup(provider)}>
          Sign In
        </button>
      </section>
    );
  }
}
