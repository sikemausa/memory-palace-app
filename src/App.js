import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from '../firebase';

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
          <section className="Application logged-in">
            <UserInfo user={user}/>
            <GoalRoom/>
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

module.exports = App;
