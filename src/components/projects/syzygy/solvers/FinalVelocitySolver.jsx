import React from 'react'
import PropTypes from 'prop-types';
import {subscript, eq1, eq2, eq3, quad} from '../equations.js'


const FinalVelocitySolver = ({vars}) => {

  const { a, x1, x2, v1, t, units } = vars;

  // Declare variable v2 and initialize it to 0
  let v2 = 0;

    // Check if v1 and t are truthy
  if (t && v1) {

    // Calculate the value of v2 using the given formula
    v2 = Number(v1) + a*t

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq1()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '2')}</div>
          <div>{subscript('v', '2')} = {subscript('v', '1')} + at</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Now solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '2')} = {v1} + {a}&#40;{t}&#41;</div>

        </div>

        <div>{subscript('v', '2')} = {v2.toFixed(2)} m/s</div>

      </div>
    )
      // Check if v1, x1, and x2 are truthy
  } else if (v1 && x1 && x2) {

    // Calculate the value of v2
    v2 = Math.sqrt(v1**2 + 2*a*(x2-x1))

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq3()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '2')}</div>
          <div>{subscript('v', '2')} = ±<span style={{fontSize: '1.1rem'}}>√</span>
          <span className='sqrt' style={{borderTop: '1px solid black'}}>
          {subscript('v', '1')}² + 2a&#40;{subscript('x','2')} - {subscript('x','1')}&#41;
            </span> </div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Now use equation three to solve for {subscript('v', '2')}</div>
          <div>{subscript('v', '2')} = ±<span style={{fontSize: '1.1rem'}}>√</span>
          <span className='sqrt' style={{borderTop: '1px solid black'}}>
          {v1}² + 2&#40;{a}&#41;&#40;{x2} - {x1}&#41;
            </span> </div>

        </div>

        <div>{subscript('v', '2')} = ±{v2.toFixed(2)} m/s</div>

      </div>
    )

  } else {
    return (
      <div className='solved'></div>
    )
  }
}

FinalVelocitySolver.propTypes = {
  vars: PropTypes.shape({
    a: PropTypes.string.isRequired,
    x1: PropTypes.string.isRequired,
    x2: PropTypes.string.isRequired,
    v1: PropTypes.string.isRequired,
    v2: PropTypes.string.isRequired,
    t: PropTypes.string.isRequired,
    units: PropTypes.oneOf(['metric', 'imperial']).isRequired,
  }).isRequired,
};

export default FinalVelocitySolver

