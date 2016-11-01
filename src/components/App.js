import React, { Component } from 'react';
import '../css/App.css';
import firebase from '../firebase';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Navigation from './Navigation';
import Menu from './Menu';
import AddText from '../containers/AddText';
import AddItemForm from './AddItemForm';
import AddItem from '../containers/AddItem';

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
            <Navigation />
            <SignIn />
            <AddItem />
          </section>
        );
      }
    }
