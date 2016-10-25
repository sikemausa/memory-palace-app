import React, { Component } from 'react';
import '../css/App.css';
import firebase from '../firebase';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Navigation from './Navigation';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        user: null
      };
    }

    componentDidMount() {
      firebase
        .auth()
        .onAuthStateChanged(user => {
          this.setState({user});
        });
    }

    render() {
      const {user} = this.state;
      if (user) {
        return (
          <section>
          <Navigation />
          <SignOut />
          </section>
        );
      }

      return (
        <section className="Application not-logged-in">
          <SignIn/>
        </section>
      );
    }
  }
