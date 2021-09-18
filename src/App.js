import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name = 'Sakib Al Hasan' job = 'Cricketer' ></Person>
      <Person name = 'l3n' job = 'Pro Gamer' ></Person>
     
    </div>
  );
}

function Person(props){
  const player = {
    Name: 'Sakib Al Hasan',
    Position: 'All-Rounder'
  }
  const stylePlayer = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }

  return(
    <div style={stylePlayer}>
      <h1 >Name: {props.name}</h1>
      <p>Job: {props.job}</p>

    </div>
  );
}

export default App;
