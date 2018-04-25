import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather.js';

var destination = document.querySelector('#app');

ReactDOM.render(
	<div>
		<Weather />
	</div>, destination
); 