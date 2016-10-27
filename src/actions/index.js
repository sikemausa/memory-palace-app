export const addItem = (id, picture, question, answer, device) => {
  return {
    type: "ADD_ITEM",
    id,
    picture,
    question,
    answer,
    device
  };
};

export const addText = (text) => {
  return {
    type: "ADD_TEXT",
    text
  };
};
