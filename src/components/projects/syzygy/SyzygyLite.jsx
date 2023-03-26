import React, { useState } from 'react'
import { Solvers } from './Solvers.js'
import { Static } from './Static.js'
import VariableNames from './static/VariableNames.jsx'
import ManualInput from './ManualInput.jsx'

const varObj = {
  a: '-9.82',
  x1: '', x2: '',
  v1: '', v2: '',
  t: '', units: 'metric'
}

const SyzygyLite = () => {
  const [variables, setVariables] = useState(varObj)
  const [showExample, setShowExample] = useState(false)
  const [showVariableNames, setShowVariableNames] = useState(false)

  const onChangeVariables = (obj) => {
    setVariables(obj)
  }

  const resetVars = () => {
    setVariables(varObj);
  };

  const toggleExample = () => {
    setShowExample(!showExample)
  }

  const toggleVariableNames = (e) => {
    setShowVariableNames(!showVariableNames)
  }

  return (
    <div className='syzygyLite'>
      <div style={{position: 'relative'}}>
        { showVariableNames ? <VariableNames /> : null }
        <div className='syzygyFormVarsInfo' onClick={toggleVariableNames}  >?</div>
        <ManualInput vars={variables} onChangeVariables={onChangeVariables} resetVars={resetVars} showVariableNames={showVariableNames} />
      </div>


        {variables.t === '?' &&
          <Solvers.TimeSolver vars={variables} />}

        {variables.x1 === '?' &&
          <Solvers.InitialPositionSolver vars={variables} />}

        {variables.x2 === '?' &&
          <Solvers.FinalPositionSolver vars={variables} />}

        {variables.v1 === '?' &&
          <Solvers.InitialVelocitySolver vars={variables} />}

        {variables.v2 === '?' &&
          <Solvers.FinalVelocitySolver vars={variables} />}
        <div className='exampleToggle' onClick={toggleExample}>
          {showExample ? 'Hide' : 'Show'} Example
        </div>
        {showExample ? <Static.NoQuestionMark vars={variables} /> : null}

    </div>
  )
}

export default SyzygyLite
