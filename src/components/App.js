import React, { Component } from 'react';
import '../css/App.css';
import firebase from '../firebase';
import SignIn from './SignIn';
import Navigation from './Navigation';
import Menu from './Menu';
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
          <section>
            <SignIn />
            <Navigation />
            <NewItem />
            <ItemsList />
          </section>
        );
      }
    }
