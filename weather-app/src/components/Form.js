import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
  	<input type="text" name="city" list="city-suggestions" placeholder="City..."/>
  	<input type="text" name="country" list="country-suggestions" placeholder="Country..."/>
  	<button>Get weather</button>
  	<datalist id="city-suggestions">
  	  <option value="Almaty" />
  	  <option value="San Jose" />
  	  <option value="San Francisco" />
  	  <option value="Houston" />
  	  <option value="Dallas" />
  	</datalist>
  	<datalist id="country-suggestions">
  	  <option value="US" />
  	  <option value="KZ" />
  	  <option value="Russia" />
  	  <option value="Mexico" />
  	  <option value="Canada" />
  	</datalist>
  </form>
)

export default Form;