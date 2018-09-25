import React from 'react';
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "f9a6e590acc45fcdb66422f53138801c";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);
    if (city && country && data.cod !== "404") {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "", 
      });
    } else if (city && country && data.cod === "404") {
        this.setState({
          error: "Invalid city/country name"
        });
    } else {
        this.setState({
          error: "Please enter the city and the country"  
        });
      }  
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 title-container">
                  <Titles />
                </div>
                <div className="col-xl-7 form-container">
                  <Form getWeather={this.getWeather}/> {/*passed a prop to Form child/*/}
                    <Weather 
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                    />
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;