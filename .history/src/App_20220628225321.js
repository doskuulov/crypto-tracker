import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const[coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('123https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => alert('Error Bro!'))
  }, []);
  return (
    <div className="App">
      <h1>API</h1>
    </div>
  );
}

export default App;