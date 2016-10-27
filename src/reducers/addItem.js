const addItem = (state = [], action) => {

  switch(action.type) {
    case 'ADD_ITEM':
      return [...state, {
        id: Date.now(),
        picture: action.picture,
        question: action.question,
        answer: action.answer,
        device: action.device }];

    default:
      return state;
  }
};

export default addItem;
