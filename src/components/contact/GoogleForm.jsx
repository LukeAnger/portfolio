import React, { useState, useRef } from 'react'

const formDataEmpty = {
  Name: '',
  Email: '',
  Suggestions: '',
}


const GoogleForm = () => {

  const formDataLocal = localStorage.getItem('formDataLocal')
  const formDataInit = formDataLocal ? JSON.parse(formDataLocal) : formDataEmpty
  const [formData, setFormData] = useState(formDataInit)


  const handleChange = (e) => {
    let tar = e.currentTarget
    let name = tar.name
    let value = tar.value
    setFormData({ ...formData, [name]: value })
    localStorage.setItem('formDataLocal', JSON.stringify(formData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let tar = e.currentTarget
    let url = tar.action
    let data = new FormData(tar)
    fetch(url, {
            method: 'POST',
            body: data,
          })
          .then(res => {
            res.json()
          })
    setFormData(formDataEmpty)
    localStorage.setItem('formDataLocal', JSON.stringify({formDataEmpty}))
  }

  return (
    <form id='suggestionsForm' onSubmit={handleSubmit} method="post" name='google-sheet' action='https://script.google.com/macros/s/AKfycbz7iomyh4iYcCTpHfEFIRJIhrGogyjE2NW1m1Whcc08XcEfBAMWyQB6VArqAcG6c1jU/exec' >
        <label className='fr' >Name:
        <input
          className='sugForm1'
          onChange={handleChange}
          name='Name'
          type='text'
          value={formData.Name}
          placeholder='name' ></input>
        </label>


        <label className='fr'>Email:
        <input
          className='sugForm2'
          onChange={handleChange}
          name='Email'
          type='email'
          value={formData.Email}
          placeholder='email' ></input>
        </label>


        <label className='fc'>Suggestion/Greeting
        <textarea
          id='contactTextArea'
          className='sugForm3'
          maxLength='600'
          onChange={handleChange}
          name='Suggestions'
          type='text'
          value={formData.Suggestions}
          placeholder='Leave me some feedback or just say hello!' required></textarea>
        </label>


      <button>Submit</button>
    </form>
  )

}

export default GoogleForm
