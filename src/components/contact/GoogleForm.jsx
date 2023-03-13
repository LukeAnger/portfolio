import React from 'react'

const GoogleForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let tar = e.currentTarget
    let action = tar.action
    let data = new FormData(tar)
    console.log('submitting', tar, data)
    fetch(action, {
            method: 'POST',
            body: data,
          })
          .then(res => {
            console.log('res', res)
            res.json()
          })
  }

  return (
    <form id='suggestionsForm' onSubmit={handleSubmit} method="post" name='google-sheet' action='https://script.google.com/macros/s/AKfycbz7iomyh4iYcCTpHfEFIRJIhrGogyjE2NW1m1Whcc08XcEfBAMWyQB6VArqAcG6c1jU/exec' >
        <label className='fr' >Name:
        <input className='sugForm1' name='Name' type='text' placeholder='name' ></input>
        </label>


        <label className='fr'>Email:
        <input className='sugForm2' name='Email' type='email' placeholder='email' ></input>
        </label>


        <label className='fc'>Suggestion/Greeting
        <textarea className='sugForm3' name='Suggestions' type='text' placeholder='Leave me some feedback or just say hello!' required></textarea>
        </label>


      <button>Submit</button>
    </form>
  )

}

export default GoogleForm
//action='https://script.google.com/macros/s/AKfycbz7iomyh4iYcCTpHfEFIRJIhrGogyjE2NW1m1Whcc08XcEfBAMWyQB6VArqAcG6c1jU/exec'

// window.addEventListener("load", function() {
//   const form = document.getElementById('suggestionForm');
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//     .then(() => {
//       alert("Success!");
//     })
//   });
// });