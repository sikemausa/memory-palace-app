import { initialState } from '../initialState';

export default function itemsReducer(state = initialState.items, action) {
  switch(action.type) {
    case 'RECEIVE_ALL_ITEMS':
      return {
        data: action.items
      };

    case 'RECEIVE_NEW_ITEM':
      return {
        data: [
          ...state.data || [],
          action.item
        ],
      };

      case 'DELETE_ITEM':
        return Object.assign({}, state, {
          data: state.data.filter(item => item.uid !== action.uid)
        });

      case 'EDIT_ITEM':
            let newState = Object.assign({}, state, {
            data: state.data.filter(item => item.uid !== action.uid)
          });
          return {
            data: [
              ...newState.data || [],
              action.item
            ]
          };

    default:
      return state;
  }
}
