import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/items';
import Card from "./Card";
import Slider from 'react-slick';

export class ItemsList extends React.Component {

  componentWillReceiveProps(nextProps) {
    const { fetchAllItems, auth } = this.props;
    const currentAuthStatus = auth.status;
    const incomingAuthStatus = nextProps.auth.status;

    if (incomingAuthStatus !== currentAuthStatus && incomingAuthStatus === 'LOGGED_IN') {
      fetchAllItems();
    }
  }

  render() {
    const { items, deleteItem } = this.props;
    let settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let cards = (items.data).map((item, index) => {
        return (
          <div data-index={index} id="item-container">
            <Card question={item.question}
                  answer={item.answer}
                  mnemonic={item.mneumonic}
                  uid={item.uid}
                  image={item.image} />
          </div>
        );
      });

    return (
      <div id="items-div">
        <h2 id="items-title">My Cards</h2>
        {(cards.length > 0) && <Slider {...settings}>{cards}</Slider>}
      </div>);
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
