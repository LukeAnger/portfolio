import React from 'react'

export const card = () => (
  <svg className='pa' width="336" height="462" viewBox="0 0 336 462" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M213.09 15.8811L214.216 16.5H215.5H256H280.5H302.886L320.137 33.0816V84.6505L312.129 99.0727L311.5 100.205V101.5V155.5V157.172L312.506 158.508L320.137 168.643V349V350.814L321.3 352.206L331 363.814V410.307L321.751 418.821L320.137 420.307V422.5V456.5H231.682L218.522 446.517L217.182 445.5H215.5H162H160.363L159.043 446.468L145.363 456.5H16.8628V425.088L28.8874 416.582L31 415.088V412.5V362V359.805L29.3844 358.32L16.8628 346.805V212.981V211.425L15.9793 210.143L5.5 194.943V157.226L15.7983 144.084L16.8628 142.726V141V43.053L43.0892 16.5H111H112.205L113.277 15.9512L133.705 5.5H194.216L213.09 15.8811Z" fill="#00AAB5" fill-opacity="0.8" stroke="#545454" stroke-width="10"/>
</svg>

)

export const arrow = (handleClick, name) => (
  <div className={name}>
    <svg onClick={handleClick} width="26" height="64" viewBox="0 0 26 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.901978" y="3.04541" width="6" height="38" rx="3" transform="rotate(-30 0.901978 3.04541)" fill="#F57EE9"/>
<rect x="20" y="28" width="6" height="38" rx="3" transform="rotate(30 20 28)" fill="#F57EE9"/>
</svg>
  </div>


)