import React from 'react'
import PropTypes from 'prop-types';
import {subscript, eq1, eq2, eq3, quad} from '../equations.js'


const InitialVelocitySolver = ({vars}) => {

  const { a, x1, x2, v2, t, units } = vars;

  // Declare variable v1 and initialize it to 0
  let v1 = 0;

  // Check if v2 and t are truthy
  if (t && v2) {
    // Calculate the value of v1 using the given formula
    v1 = Number(v2) - a*t

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq1()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = {subscript('v', '2')} - at</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Now solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = {v2} - {a}&#40;{t}&#41;</div>

        </div>

        <div>{subscript('x', '2')} = {v1.toFixed(2)} m/s</div>

      </div>
    )
      // Check if v2, x1, and x2 are truthy or equal to 0
  } else if (v2 && x1 && x2) {

    // Calculate the value of v1
    v1 = Math.sqrt(v2**2 - 2*a*(x2-x1))

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq3()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = ±√&#40;{subscript('v', '2')}² - 2a&#40;{subscript('x','2')} - {subscript('x','1')}&#41;&#41; </div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Now use equation three to solve for {subscript('x', '1')}</div>
          <div>{subscript('v', '1')} = ±√&#40;{v2}² - 2&#40;{a}&#41;&#40;{x2} - {x1}&#41;&#41; </div>

        </div>

        <div>{subscript('v', '1')} = ±{v1.toFixed(2)} m</div>

      </div>
    )
      // Check if x1, x2, and t are truthy
  } else if (t && x1 && x2) {

    // Calculate the value of v1
    v1 = (x2 - x1)/t - 0.5*a*t

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq2()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = &#40;{subscript('x', '2')} - {subscript('x', '1')}- 0.5at²&#41;/t </div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Now use equation three to solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = &#40;{x2} - {x1}- 0.5&#40;{a}&#41;&#40;{t}²&#41;&#41;/{t}</div>

        </div>

        <div>{subscript('v', '1')} = {v1.toFixed(2)} m</div>

      </div>
    )

  } else {
    return (
      <div className='solved'></div>
    )
  }
}

InitialVelocitySolver.propTypes = {
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

export default InitialVelocitySolver

