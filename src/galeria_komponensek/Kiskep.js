import React from 'react'
import "./Kiskep.css"

function kiskep(props) {
  return (
    <div className='kiskep'>
    {console.log(props.adat)}
        <img src={props.adat.src} alt={props.adat.alt} />
    </div>
  )
}
export default kiskep;
