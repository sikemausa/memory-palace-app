import React, {Component} from 'react';
import firebase from '../firebase';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      palaces: [],
    };
  }

  render(){
    return(
      <h1>Hello</h1>
    );
  }

}
