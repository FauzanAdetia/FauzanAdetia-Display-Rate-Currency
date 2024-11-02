import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App =() => {

  const [currency, setCurrency] = useState([]);

  function getResult() {
    axios.get("https://api.currencyfreaks.com/v2.0/rates/latest",{
      params :{
        'symbols' : 'CAD,EUR,IDR,JPY,CHF,GBP',
        'apikey' : 'YOUR_APIKEY'
      }
    })
    .then(response =>{
      setCurrency(response.data.rates)
    })
    .catch(error =>{
      console.log(error.response.data);
    })

  }
  useEffect(() => {
    getResult();
  },[])
  
  const exchangeRate = rate => Number(rate);
  const weBuy = rate => Number(rate)+(rate * 0.05);
  const weSell = rate => Number(rate)-(rate * 0.05);  


  const a = [{
    currName : "CAD",
    ExchangeRate : exchangeRate(currency.CAD).toFixed(4),
    weBuy : weBuy(currency.CAD).toFixed(4),
    weSell : weSell(currency.CAD).toFixed(4)
  },
  {
    currName : "EUR",
    ExchangeRate : exchangeRate(currency.EUR).toFixed(4),
    weBuy : weBuy(currency.EUR).toFixed(4),
    weSell : weSell(currency.EUR).toFixed(4)
  },
  {
    currName : "IDR",
    ExchangeRate : exchangeRate(currency.IDR).toFixed(4),
    weBuy : weBuy(currency.IDR).toFixed(4),
    weSell : weSell(currency.IDR).toFixed(4)
  },
  {
    currName : "JPY",
    ExchangeRate : exchangeRate(currency.JPY).toFixed(4),
    weBuy : weBuy(currency.JPY).toFixed(4),
    weSell : weSell(currency.JPY).toFixed(4)
  },
  {
    currName : "CHF",
    ExchangeRate : exchangeRate(currency.CHF).toFixed(4),
    weBuy : weBuy(currency.CHF).toFixed(4),
    weSell : weSell(currency.CHF).toFixed(4)
  },
  {
    currName : "GBP",
    ExchangeRate : exchangeRate(currency.GBP).toFixed(4),
    weBuy : weBuy(currency.GBP).toFixed(4),
    weSell : weSell(currency.GBP).toFixed(4)
  }
]





  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {
              a.map((items, index)=>(
                // eslint-disable-next-line react/jsx-key
                <tr key={index}>
                  <td>{(items.currName)}</td>
                  <td>{items.weBuy}</td>
                  <td>{items.ExchangeRate}</td>
                  <td>{items.weSell}</td>
                </tr>
              ))

            }

            <tr>
              <td colSpan={4} className='textBottomTable'>Rates are based from 1 USD. <br />This application using API from https://currencyfreaks.com/</td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
