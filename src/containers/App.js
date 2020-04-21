import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
//State is and object that describe the application. State is able to change(dynamic).
//State is passed to the children components from the parent component. It is a PROP to the child component. PROPS are just values that cannot be changed.
//https://jsonplaceholder.typicode.com/users

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			searchField: ''	
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=>this.setState({robots:users}))
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})	
	}

	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return !robots.length ?
			<h1 className='tc f1'>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<br/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}

	}

export default App;