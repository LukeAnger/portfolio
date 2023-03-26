import React from 'react'
import {subscript, superscript} from './equations.js'


let objReset = {
  a: '-9.82',
  x1: '', x2: '',
  v1: '', v2: '',
  t: '', units: 'metric'
}

const ManualInput = ({vars, onChangeVariables, showEquations, resetVars}) => {
  let xunit = vars.units === 'metric' ? 'm' : 'ft'
  let vunit = vars.units === 'metric' ? 'm/s' : 'ft/s'
  let aunit = vars.units === 'metric' ? 'm/s²' : 'ft/s²'

  let resetForm = (e) => {
    onChangeVariables(objReset)
    e.target.reset()
  }
  let submitType = 'submit'
  let onSubmitHandler = (e) => {
    e.preventDefault()
    let tar = e.nativeEvent.target
    console.log(submitType)
    let objSubmit = {
      a: '-9.82', units: 'metric',
      x1: tar[0].value, x2: tar[1].value,
      v1: tar[2].value, v2: tar[3].value,
      t: tar[4].value
    }

    submitType === 'submit' ? onChangeVariables(objSubmit) : resetForm(e)
  }



  return (

      <form className='fc jc-sb variable-form' onSubmit={onSubmitHandler} style={{zIndex: '6'}}>

        <div className='fr jc-sb variable'>
          <div >a</div>
          <div className='equals'>=</div>
          <div>{vars.a} {aunit}</div>
        </div>

        <div className='fr jc-sb variable'>
          <div>{subscript('x', '1')}</div>
          <div className='equals'>=</div>
          <input defaultValue={vars.x1} ></input>
          <div>{xunit}</div>
        </div>

        <div className='fr jc-sb variable'>
          <div>{subscript('x', '2')}</div>
          <div className='equals'>=</div>
          <input defaultValue={vars.x2}></input>
          <div>{xunit}</div>
        </div>

        <div className='fr jc-sb variable'>
          <div style={{marginRight: '15px'}}>{subscript('v', '1')}</div>
          <div className='equals'>=</div>
          <input defaultValue={vars.v1} ></input>
          <div>{vunit}</div>
        </div>

        <div className='fr jc-sb variable'>
          <div style={{marginRight: '15px'}}>{subscript('v', '2')}</div>
          <div className='equals'>=</div>
          <input defaultValue={vars.v2}></input>
          <div>{vunit}</div>
        </div>

        <div className='fr jc-sb variable'>
          <div>t</div>
          <div className='equals'>=</div>
          <input defaultValue={vars.t}></input>
          <div>s</div>
        </div>

        <div className='fr jc-sa'>

          <button className='submit-vars button-vars' onClick={() => submitType = 'submit'}>submit</button>
          <button className='reset-vars button-vars' onClick={() => submitType = 'reset'}>reset</button>
        </div>

      </form>

  )
}

export default ManualInput