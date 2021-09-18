import logo from './logo.svg';
import './App.css';


const cinemas = [
  {nayok: 'Koober', Nayika: 'Kopila'},
  {nayok: 'Rubel', Nayika: 'Shabana'},
  {nayok: 'Ananta Jalil', Nayika: 'Borsha'}
]
function App() {
  return (
    <div className="App">
      {/* <Person name = 'Sakib Al Hasan' job = 'Cricketer' ></Person>
      <Person name = 'l3n' job = 'Pro Gamer' ></Person> */}

      {
        cinemas.map(cinema => <Cinema nayok = {cinema.nayok} nayika ={cinema.Nayika}></Cinema>)
      }
     
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

function Cinema(props){
  const stylePlayer = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return(
    <div style={stylePlayer}>
      <h1>Nayok: {props.nayok}</h1>
      <h1>Nayika: {props.nayika}</h1>
    </div>
  );
}

export default App;
