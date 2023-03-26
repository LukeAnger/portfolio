import React from 'react';
import {displayVariable, subscript, superscript} from '../equations.js'

const VariableNames = ({vars}) => {

  return(
    <div id='variables' className='variables fr jc-sb' >

      <div className='fc'>
        <div style={{marginRight: '5px', lineHeight: '18px'}}>a</div>
        <div style={{marginRight: '5px', lineHeight: '18px'}}>{subscript('x', '1')}</div>
        <div style={{marginRight: '5px', lineHeight: '18px'}}>{subscript('x', '2')}</div>
        <div style={{marginRight: '5px', lineHeight: '18px'}}>{subscript('v', '1')}</div>
        <div style={{marginRight: '5px', lineHeight: '18px'}}>{subscript('v', '2')}</div>
        <div style={{marginRight: '5px', lineHeight: '18px'}}>t</div>
        <div style={{marginRight: '5px', lineHeight: '26px'}}>Δx</div>
      </div>
      <div className='fc'>
        <div style={{lineHeight: '22px'}}>= &nbsp;acceleration due to gravity</div>
        <div style={{lineHeight: '22px'}}>= &nbsp;initial position</div>
        <div style={{lineHeight: '22px'}}>= &nbsp;final position</div>
        <div style={{lineHeight: '22px'}}>= &nbsp;initial velocity</div>
        <div style={{lineHeight: '22px'}}>= &nbsp;final velocity</div>
        <div style={{lineHeight: '22px'}}>= &nbsp;time</div>
        <div style={{lineHeight: '22px'}}>= &nbsp;{subscript('x', '2')} - {subscript('x', '1')}</div>
      </div>



      </div>

    )

};

export default VariableNames;
