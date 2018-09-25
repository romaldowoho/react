import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Prices from './components/Prices';


//https://api.github.com/users/romaldowoho
const API_KEY = "f9a6e590acc45fcdb66422f53138801c";
class App extends Component {
  state = {
    price: null,
    ticker: null,
    ticker_list : [],
  }
  
  getPrice = (e) => {
    e.preventDefault();
    const ticker = e.target.ticker.value;
    this.setState({
      ticker,
      ticker_list: [...this.state.ticker_list,ticker]
    });
    if(ticker) {
      //axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ticker},KR&mode=json&appid=${API_KEY}&units=metric`)
      //axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/price`)
      axios.get(`http://worldclockapi.com/api/json/${ticker}/now`)
      .then((res) => {
        console.log(res);
        console.log(this.state.ticker_list);
        const price = res.data.currentDateTime;
        this.setState({ price });
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  updatePrice = () => {
    if(this.state.ticker) {
      //axios.get(`https://api.iextrading.com/1.0/stock/${this.state.ticker}/price`)
      axios.get(`http://worldclockapi.com/api/json/${this.state.ticker}/now`)
      .then((res) => {
        const price = res.data.currentDateTime;
        this.setState({ price });
        console.log(price);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <Form getPrice={ this.getPrice } />
        { this.state.price ? <p> { this.state.price }</p> :
        <p>Please enter a ticker</p> }

      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(this.updatePrice,15000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default App;
