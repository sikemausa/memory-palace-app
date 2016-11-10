import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/items";
import SignIn from "./SignIn";

export class ItemsList extends React.Component {

  render() {
    const { items, deleteItem } = this.props;
    return (
      <div id="sign-in-page">
        <div id="logo"></div>
        <h1 id="title">Memory Palace</h1>
        <SignIn />
      </div>
    );
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
