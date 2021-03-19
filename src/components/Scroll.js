import React from 'react';

const Scroll =(props)=>{
    return (
        <div style={{overflowY:'scroll', border:'1px solid black', height:'80vh', margin:'10px 0', padding:'10px'}}>
            {props.children}
        </div>
    )
}
export default Scroll;
