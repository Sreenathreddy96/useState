import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [score, setScore] = useState(0);
  let [balls, setBalls] = useState(0);
  let [wickets, setWickets] = useState(0);
  console.log("Displaying Scoreboard")
  return (
    <div className="App">
      <h1>Score:{score}</h1>
      <h1>Overs:{parseInt(balls/6)}.{balls % 6}</h1>
      <h1>Wickets: {wickets}</h1>
      <button onClick={()=>{
        setScore(score + 1);
        setBalls(score + 1);
      }}>Single</button>
      
      <button onClick={()=>{
        setScore(score + 2);
      }}>Double</button>
      <button onClick={()=>{
        setWickets(wickets + 1);
      }}>Wicket</button>
      <button onClick={()=>{
        setScore(score + 4);
      }}>Four</button>
      <button onClick={()=>{
        setScore(score + 6);
      }}>Six</button>
      <button onClick={()=>{
        setScore(score + 1);
      }}>Wide</button>
      
    </div>
  );
}

export default App;
