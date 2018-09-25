import React from 'react';

const Weather = props => (
  <div className="weather__info">
  	{ 
  		props.city && props.country && !props.error && <p className="weather__key"> Location: 
  		  <span className="weather__value"> {props.country}, {props.city}</span>
  		</p> 
  	}
  	{ 
  		props.temperature && !props.error && <p className="weather__key"> Temperature: 
  	      <span className="weather__value"> {props.temperature}</span>
  		</p> 
  	}
	{ 
		props.humidity && !props.error && <p className="weather__key"> Humidity: 
		  <span className="weather__value"> {props.humidity}</span>
		</p> 
	}
	{ 
		props.description && !props.error && <p className="weather__key"> Conditions: 
		  <span className="weather__value"> {props.description}</span>
		</p> 
	}
	{ 
		props.error && <p className="weather__error"> {props.error} </p> 
	}
  </div>	
)

export default Weather;