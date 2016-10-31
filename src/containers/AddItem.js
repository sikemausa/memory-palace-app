import { connect } from 'react-redux';
import { addItem } from '../actions';
import AddItemForm from '../components/AddItemForm';

const mapDispatchToProps=(dispatch) => {
  return {
    onSubmit: (picture, question, answer, device) => {
      dispatch(addItem(picture, question, answer, device));
    }
  };
};

let AddItem = connect(null, mapDispatchToProps)(AddItemForm);

export default AddItem;
