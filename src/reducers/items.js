const items = (state = [], action) => {

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

export default items;

// let currentUser = firebase.auth().currentUser.uid;
// let databaseReference = firebase.database().ref(`${currentUser}/Palaces/Palace1`);
//
// Where are we supposed to define the above? ⬆
//
// case 'ADD_ITEM':
//
//   databaseReference.concat(
//     [...state, {
//     id: Date.now(),
//     picture: action.picture,
//     question: action.question,
//     answer: action.answer,
//     device: action.device }];
//   )
//
//   return state;
