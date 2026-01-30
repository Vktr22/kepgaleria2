import React from 'react'
import "./Kiskep.css"

function kiskep(props) {

    function indexVisszaad(){
        let index = props.adat.id;
        console.log(props);
        props.szuloMetodus(index);
    }

  return (
    <div className='kiskep'>
    {console.log(props.adat)}
        <img src={props.adat.src} alt={props.adat.alt} inClick={indexVisszaad} />
    </div>
  )
}
export default kiskep;
