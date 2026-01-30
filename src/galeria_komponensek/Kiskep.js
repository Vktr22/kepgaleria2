import React from 'react'
import "./Kiskep.css"

function Kiskep(props) {

    function indexVisszaad(){
        let index = props.adat.id;
        console.log(props);
        props.szuloMetodus(index);
    }

  return (
    <div className='kiskep'>
    {console.log(props.adat)}
        <img src={props.adat.src} alt={props.adat.alt} onClick={indexVisszaad} />
    </div>
  )
}
export default Kiskep;
