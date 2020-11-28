import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to mattpaustin.com
        <div>
          *** site under construction ***
        </div>
        <div>
          <Button variant='outlined' style={{margin: '30px', color: 'white'}} >
            Don't click this button
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
