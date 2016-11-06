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

      case 'DELETE_REC':
        return {
          ...state,
          data: action.deleteItem
        };

    default:
      return state;
  }
}
