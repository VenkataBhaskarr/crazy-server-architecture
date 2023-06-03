import './App.css'
import axios from 'axios'
import {useState} from "react";

function App() {
    const [response, setResponse] = useState('Response from server...')
    const handleClickforCPP = () => {
        axios.get('http://localhost:8080/cpp').then((res) => {
            setResponse(res)
        })
        console.log("CPP")
    }
    const handleClickforRUST = () => {
        axios.get('http://localhost:8080/cpp').then((res) => {
            setResponse(res)
        })
        console.log("RUST")
    }
    const handleClickforGOLANG = () => {
        axios.get('http://localhost:8080/cpp').then((res) => {
            setResponse(res)
        })
        console.log("GOLANG")
    }
    const handleClickforPYTHON = () => {
        axios.get('http://localhost:8080/cpp').then((res) => {
            setResponse(res)
        })
        console.log("PYTHON")
    }
  return (
    <div className="App">
        <h2>THIS IS SERVERZZ</h2>
        <div className="button">
        <button onClick={handleClickforCPP}>
            Click to get response from C++ server
        </button >
        </div>
        <br/>
        <div className="button">
        <button onClick={handleClickforRUST}>
            Click to get response from RUST server
        </button>
        </div>
        <br/>
        <div className="button">
        <button onClick={handleClickforGOLANG}>
            Click to get response from GOLANG server
        </button>
        </div>
        <br/>
        <div className="button">
        <button onClick={handleClickforPYTHON}>
            Click to get response from PYTHON server
        </button>
        </div>
        <br/>
        <br/>
        <div className="response">
             <h2>{response}</h2>
        </div>
    </div>
  )
}

export default App
