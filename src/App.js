import React, { Component } from 'react';
import hair from './hair.jpeg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="hair">Shampoo App</h1>
					<img src={hair} className="App-logo" alt="logo" />
					<button className="button">Scan Shampoo</button>
				</header>
			</div>
		);
	}
}

export default App;
