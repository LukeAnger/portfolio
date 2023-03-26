import React from 'react';
import {eq1, eq2, eq3, quad} from '../equations.js'

const Equations = () => {

  return (
    <div className='equations'>
      <div style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '5px'}}>Helpful Equations</div>
      <div className='fr'>Equation 1&#41; &nbsp;&nbsp;{eq1()}</div>
      <div className='fr'>Equation 2&#41; &nbsp;&nbsp;{eq2()}</div>
      <div className='fr'>Equation 3&#41; &nbsp;&nbsp;{eq3()}</div>
      <div className='fr'><div><div>Quadratic</div><div>Equation</div></div> &nbsp;&nbsp;&nbsp;&nbsp;{quad()}</div>
    </div>
  )
}



export default Equations