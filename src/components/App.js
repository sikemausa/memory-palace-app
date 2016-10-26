import React, { Component } from 'react';
import '../css/App.css';
import firebase from '../firebase';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Navigation from './Navigation';
import Menu from './Menu';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        user: null
      };
    }

    get reference() {
 
      return firebase
        .database();
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
            <h1>Logged in as {this.state.user.displayName}</h1>
          <SignOut />
          <Menu reference={this.reference}/>
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
