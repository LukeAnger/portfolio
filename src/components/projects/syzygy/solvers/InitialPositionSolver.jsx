import React from 'react'
import PropTypes from 'prop-types';
import {subscript, superscript, eq1, eq2, eq3, quad} from '../equations.js'

const InitialPositionSolver = ({vars}) => {

  const { a, x2, v1, v2, units } = vars;

  let x1 = 0;

  if (vars.t && vars.v1 && vars.x2) {

    x1 = vars.x2 - vars.v1*vars.t - 0.5*vars.a*vars.t**2

    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq2()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('x', '1')}</div>
          <div>{subscript('x', '1')} = {subscript('x', '2')} - {subscript('v', '1')}t - 0.5a{superscript('t','2')}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Plug in your known variables</div>
          <div>{subscript('x', '1')} = {vars.x2} - {vars.v1}&#40;{vars.t}&#41; - 0.5&#40;{vars.a}&#41;&#40;{superscript(vars.t, '2')}&#41;</div>

        </div>

        <div>{subscript('x', '1')} = {x1.toFixed(2)} m</div>

      </div>
    )
      // Check if v1, v2, and x2 are truthy
  } else if (vars.t && vars.v2 && vars.x2) {
    // Calculate the value of x1

    x1 = vars.x2 - (vars.v2 - 0.5*vars.a*vars.t) - 0.5*vars.a*vars.t**2
    // Calculate the value of v1
    let v1 = (vars.v2 - 0.5*vars.a*vars.t)

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq1()} to solve for {subscript('v', '1')}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = {subscript('v', '2')} - 0.5at</div>

        </div>

        <div className='steps fc ai-cen'>

          <div className='ta-cen'>STEP THREE: Now we can use all known variables to solve for {subscript('x', '1')} with equation three </div>
          <div>{subscript('x', '1')} = {vars.x2} - {v1}&#40;{vars.t}&#41; - 0.5&#40;{vars.a}&#41;&#40;{superscript(vars.t, '2')}&#41;</div>

        </div>

        <div>{subscript('x', '1')} = {x1.toFixed(2)} m</div>

      </div>
    )
      // Check if v1, v2, and x2 are truthy
  } else if (vars.v1 && vars.v2 && vars.x2) {
    // Calculate the value of x1
    x1 = (vars.v2**2 - vars.v1**2)/(-vars.a*2 + vars.x2)

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved' >

        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq3()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('x', '1')}</div>
          <div>{subscript('x', '1')} = &#40;&#40;{subscript('v','2')}² - {subscript('v','1')}²&#41;/-2a&#41; + {subscript('x','2')}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Now use equation three to solve for {subscript('x', '1')}</div>
          <div>{subscript('x', '1')} = &#40;&#40;{vars.v2}² - {vars.v1}²&#41;/-2&#40;{vars.a}&#41;&#41; + {vars.x2}</div>

        </div>

        <div>{subscript('x', '1')} = {x1.toFixed(2)} m</div>

      </div>
    )

  } else {
    return (
      <div className='solved'></div>
    )
  }
}

InitialPositionSolver.propTypes = {
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

export default InitialPositionSolver

