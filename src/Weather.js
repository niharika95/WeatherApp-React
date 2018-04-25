import React, {Component} from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay.js';
import './Weather.css';

export default class Weather extends Component{
	constructor(props){
		super(props);
		this.state =({
			city: '',
			temp: 0,
			toDisplay: false
		});

		this.getWeatherFahreinheit = this.getWeatherFahreinheit.bind(this);
		this.getWeatherCelcius = this.getWeatherCelcius.bind(this);
	}

	getWeatherFahreinheit(e){
		var api = '652a2d85999ebad6a9b2896531f98e7e';
		var baseUrl = "http://api.openweathermap.org/data/2.5/weather";
		var zipcode = this.zipcode.value;

		axios.get(baseUrl, {
			params: {
				zip: zipcode,
				appid: api
			}
		}).then((response) =>{
			console.log(response);
			var city = response.data.name;
			var temp = response.data.main.temp;

			temp = (9 / 5) * (temp - 273) + 32;

			this.setState({
				city: city,
				temp: temp,
				toDisplay: true
			});
		});

		e.preventDefault();
	}

	getWeatherCelcius(e){
		var api = '652a2d85999ebad6a9b2896531f98e7e';
		var baseUrl = "http://api.openweathermap.org/data/2.5/weather";
		var zipcode = this.zipcode.value;

		axios.get(baseUrl, {
			params: {
				zip: zipcode,
				appid: api
			}
		}).then((response) =>{

			var city = response.data.name;
			var temp = response.data.main.temp;

			temp = (temp - 273);

			this.setState({
				city: city,
				temp: temp,
				toDisplay: true
			});
		});

		e.preventDefault();
	}

	render(){
		var display;
		if(this.state.toDisplay){
			display = (
				<div> 
					<WeatherDisplay city={this.state.city} temp={this.state.temp} icon={this.iconBaseUrl} />
				</div>
			);
		}else{}

		return(
			<div>
				<p className = 'question'>{"Wanna know what the weather's like?"}</p>
				<div className='zipcodeBlankAndButton'>
					<input ref={(zipcode) => this.zipcode = zipcode} placeholder='Zipcode' className='zipcodeBlank'></input>
					<br/><br/>
					<button onClick={this.getWeatherFahreinheit}>Fahreinheit</button>
					<button onClick={this.getWeatherCelcius}>Celcius</button>
					{display}
					
				</div>
				<br/><br/>
			</div>
		);
	}
}