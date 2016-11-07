import React, { Component } from 'react';
import '../css/index.css';
import firebase from '../firebase';
import SignIn from './SignIn';
import Navigation from './Navigation';
import ItemsList from './ItemsList';
import NewItem from './NewItem';
import LoginPage from './LoginPage';

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
      if(this.state.user){
        return (
          <section id="app">
              <SignIn />
            <div id="main-page">
              <NewItem />
              <ItemsList />
            </div>
          </section>
        );
      }
      else return (
        <LoginPage />
      )
    }
}
