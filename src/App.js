import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
     
    </div>
  );
}

function Person(){
  const player = {
    Name: 'Sakib Al Hasan',
    Position: 'All-Rounder'
  }
  const stylePlayer = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px'
  }

  return(
    <div style={stylePlayer}>
      <h1 >{player.Name}</h1>
      <p>{player.Position}</p>

    </div>
  );
}

export default App;
