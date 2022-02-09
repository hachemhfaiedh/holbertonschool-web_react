import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className="App-container">
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body"> 
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="password" id="password">Password: </label>
        <input type="password" name="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer"> 
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
      </div>
    </div>
  );
}

export default App;
