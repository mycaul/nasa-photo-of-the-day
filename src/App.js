import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "/Components/header/header";
import Post from "/Components/post/post";
const axios = require("axios").default;




function App() {
  const BASE_URL = "https://api.nasa.gov/planetary/apod";
  const API_KEY = "QAxEoxV5gEqyv4YdpT2aMzZcezNCwLM0WtO8x3Rz";
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then(response => {
      console.log(response)
      setData(response.data)
      })
    .catch(error => {
        console.log(error);
      });
    }, []);
  
 

  return (
    <div className="App">
      
      <Header/>
      <Post data={data}/>
    </div>
  );
}

export default App;
