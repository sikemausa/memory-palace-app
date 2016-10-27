import { connect } from 'react-redux';
import { addText } from '../actions';
import test from '../components/test';

const mapDispatchToProps=(dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addText(text));
    }
  };
};

let AddText = connect(null, mapDispatchToProps)(test);

export default AddText;
