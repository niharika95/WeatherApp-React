import React, {Component} from 'react';
import './WeatherDisplay.css';

export default class WeatherDisplay extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='answer'>
				
				<p>{this.props.city}</p>
				<p>{this.props.temp}</p>
			</div>
		);
	}
}