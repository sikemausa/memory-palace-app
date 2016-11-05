import React, { Component } from 'react';
import '../css/index.css';
import firebase from '../firebase';
import SignIn from './SignIn';
import Navigation from './Navigation';
import ItemsList from './ItemsList';
import NewItem from './NewItem';

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
        return (
          <section id="app">
              <SignIn />
            {/* <Navigation /> */}
            <div id="main-page">
              <NewItem />
              <ItemsList />
            </div>
          </section>
        );
      }
    }
