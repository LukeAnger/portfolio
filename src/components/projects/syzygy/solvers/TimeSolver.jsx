import React from 'react'
import PropTypes from 'prop-types';
import {subscript, superscript, eq1, eq2, quad} from '../equations.js'

const TimeSolver = ({vars}) => {

  const { a, x1, x2, v1, v2, units } = vars;

  // Declare variable t and initialize it to 0
  let t = 0;

  // Check if v1 and v2 are truthy
  if (v1 && v2) {
    // Calculate the value of t using the given formula
    t = (v2 - v1) / a;

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved'>

        <div className='steps s1 fc ai-cen'>

          <div>STEP ONE: Pick your equation</div>
          <div>{eq1()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for t</div>
          <div>t = &#40;{subscript('v','2')} - {subscript('v', '1')}&#41;/a</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Plug in your known variables</div>
          <div>t = &#40;{v2} m/s - {v1} m/s&#41;/-9.82 m/s²</div>

        </div>

        <div>t = {t.toFixed(2)} s</div>

      </div>
    );
  } // Check if v1, x1, and x2 are truthy or equal to 0
  else if (
    (v1 || v1 === 0) &&
    (x1 || x1 === 0) &&
    (x2 || x2 === 0)
  ) {

    // Calculate the value of t
    t = (-v1 - Math.sqrt(v1 ** 2 - 2 * a * (x1 - x2))) / a;

    // Return a JSX element with class 'fc solved'
    return (
      <div className='fc solved'>

        <div className='steps fc ai-cen'>

          <div><b>STEP ONE:</b> Pick your equation</div>
          <div>{eq2()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div><b>STEP TWO:</b> Since we have t² and t we need to use the quadratic formula</div>
          {quad()}

          <div>

            <b>a</b> = 0.5a = {0.5 * a}, <b>b</b> = {subscript('v', '1')} = {v1}, <b>c</b> = {subscript('x', '1')} - {subscript('x', '2')} = {-x1}

          </div>

        </div>

        <div className='steps fc ai-cen'>

          <div><b>STEP THREE:</b> Plug in your known variables</div>
          <div>t = &#40;-{v1} + √&#40;{v1}² - 4 &#40;{0.5 * a}&#41; &#40;{x1}&#41; &#41; &#41;/2 &#40;{0.5 * a}&#41;</div>

        </div>

        <div><b>t</b> = {t.toFixed(2)} s</div>

      </div>
    );
  } else {
      return (
        <div className='solved'></div>
      )
    }
}

TimeSolver.propTypes = {
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

export default TimeSolver