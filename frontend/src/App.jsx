import './App.css'
import axios from 'axios'
import {useState} from "react";

function App() {
    const [response, setResponse] = useState('Response from server...')
    const handleClickforCPP = async () => {
        let startTimeForCPP = new Date().getTime()
        let endTimeForCPP = 0;
        await axios.get('http://localhost:8080/time').then((res) => {
            // console.log(res)
            setResponse(res.data)
            endTimeForCPP = new Date().getTime()
        })
        startTimeForCPP = Number(startTimeForCPP)
        endTimeForCPP = Number(endTimeForCPP)
        console.log(endTimeForCPP - startTimeForCPP)
    }
    const handleClickforRUST = () => {
        axios.get('http://localhost:8081/time').then((res) => {
            setResponse(res)
        })
        console.log("RUST")
    }
    const handleClickforGOLANG = async () => {
        let startTime = new Date().getTime()
        let endTime = 0;
        await axios.get('http://localhost:8082/time').then((res) => {
             // console.log(res)
             setResponse(res.data)
             endTime = new Date().getTime()
        })
        startTime = Number(startTime)
        endTime = Number(endTime)
        console.log(endTime - startTime)
    }
    const handleClickforPYTHON = () => {
        axios.get('http://localhost:8083/time').then((res) => {
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
