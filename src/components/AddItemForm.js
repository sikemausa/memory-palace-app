import React from 'react'

let AddItemForm = ({ onSubmit }) => {
  let pictureInput;
  let questionInput;
  let answerInput;
  let deviceInput;

  return (
    <section>
      <form onSubmit={ (e) => {
          e.preventDefault()
          onSubmit(pictureInput.value,
                   questionInput.value,
                   answerInput.value,
                   deviceInput.value)
      }}>
        Picture:
        <input ref={ node => { pictureInput = node }} />
        Question:
        <input ref={ node => { questionInput = node }} />
        Answer:
        <input ref={ node => { answerInput = node }} />
        <input ref={ node => { deviceInput = node }} />
        {/* wtf is happening here? What's is ref arbitrary, what's the node function do? ⬆ */}
        {console.log}
        {/* I'm assuming this doesn't do anything, correct? ⬆ */}
        <button>Add Item</button>
      </form>
    </section>
  )
}

export default AddItemForm;
