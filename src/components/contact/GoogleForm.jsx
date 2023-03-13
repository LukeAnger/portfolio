import React, { useState } from 'react'

const formDataInit = {
  Name: '',
  Email: '',
  Suggestions: '',
}

const GoogleForm = () => {

  const [formData, setFormData] = useState(formDataInit)

  const handleChange = (e) => {
    let tar = e.currentTarget
    let name = tar.name
    let value = tar.value
    setFormData({ ...formData, [name]: value })
  }

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
    setFormData(formDataInit)
  }

  return (
    <form id='suggestionsForm' onSubmit={handleSubmit} method="post" name='google-sheet' action='https://script.google.com/macros/s/AKfycbz7iomyh4iYcCTpHfEFIRJIhrGogyjE2NW1m1Whcc08XcEfBAMWyQB6VArqAcG6c1jU/exec' >
        <label className='fr' >Name:
        <input className='sugForm1' onChange={handleChange} name='Name' type='text' value={formData.Name} placeholder='name' ></input>
        </label>


        <label className='fr'>Email:
        <input className='sugForm2' onChange={handleChange} name='Email' type='email' value={formData.Email} placeholder='email' ></input>
        </label>


        <label className='fc'>Suggestion/Greeting
        <textarea className='sugForm3' onChange={handleChange} name='Suggestions' type='text'
        value={formData.Suggestions}
         placeholder='Leave me some feedback or just say hello!' required></textarea>
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