import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

export class SignIn extends Component {

  render() {
    const { status, username, logIn, logOut } = this.props;
    if(status === 'LOGGED_IN') {
      return (
        <div id="auth-panel">
          <h1 id="app-name">Memory Palace</h1>
          <section id="log-out">
            <p id="logged-in-as">Welcome, <strong>{username}</strong>!</p>
            <button id="log-out-button" onClick={e => logOut()}>Log Out</button>
          </section>
        </div>
      );
    }
    else {
      return (
        <section className="auth-panel">
          <button
          className="SignInButton"
          disabled={(status === 'AWAITING_AUTH_RESPONSE')}
          onClick={e => logIn()}>
          Sign In
          </button>
        </section>
      );
    }
  }
}

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
