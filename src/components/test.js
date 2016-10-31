import React from 'react';

let test = ({ onSubmit }) => {
  let input;

  return (
    <section>
      <form onSubmit={ (e) => {
          e.preventDefault()
          onSubmit(input.value)
          input.value = ""
      }}>
        <input ref={ node => { input = node }}/>
        {console.log}
        <button>Add Text</button>
      </form>
    </section>
  )
}

export default test;
