import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

export class SignIn extends Component {

  render() {
    const { status, username, logIn, logOut } = this.props;
    if(status === 'LOGGED_IN') {
      let firstName = username;
      let lastIndex = username.lastIndexOf(" ");
      firstName = firstName.substring(0, lastIndex);

      return (
        <div id="auth-panel">
          <h1 id="app-name">Memory Palace</h1>
          <section id="log-out">
            <p id="logged-in-as">Welcome, <span id="first-name">{firstName}!</span></p>
            <br />
            <a id="log-out-button" onClick={e => logOut()}>Log Out</a>
          </section>
        </div>
      );
    }
    else {
      return (
        <a id="sign-in-button"
          disabled={(status === 'AWAITING_AUTH_RESPONSE')}
          onClick={e => logIn()}
          >
        </a>
      );
    }
  }
}

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
