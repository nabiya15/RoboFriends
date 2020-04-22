import React , {Component} from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}
	componentDidCatch(err, info){
		this.setState({hasError: true})
	}

	render(){
		return this.state.hasError ?
			(
			<div className='tc'>	
				<h1 >Holy Guacamole! Something went wrong</h1>
			 	<img src='https://media.giphy.com/media/3o6ZtrBkXI06Ze4XD2/giphy.gif' alt='error'/>
			</div>	
			) :
			this.props.children
	}

} 
export default ErrorBoundry;
