import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY:'scroll', height: '44rem'}}>
			{props.children}
		</div>
	)
}


export default Scroll;