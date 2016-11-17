import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/items";

export class Card extends React.Component {
  constructor(){
    super();
    this.state={
      flipped: false,
      clicked: false
    };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
      clicked: true
    });
  }

  render() {
    let flippedCSS = this.state.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
    if (!this.state.clicked) flippedCSS = "";

    return(
      <div className="Card" onClick={this.flip}>
        <div className={"Card-Front"+flippedCSS}>
        <img src={this.props.image} role="presentation" />
        </div>
        <div className={"Card-Back"+flippedCSS}>
        <button id="delete-button"
                 onClick={() => this.props.deleteItem(this.props.uid)}>Delete</button>
        <p><span className="label">Question:</span> {this.props.question}</p>
        <p><span className="label">Answer:</span> {this.props.answer}</p>
        <p><span className="label">Mnemonic Device:</span> {this.props.mnemonic}</p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
