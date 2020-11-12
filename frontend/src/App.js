import './App.css';
import Navbar from '../src/components/Navbar'
import { Button } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
      <Button variant='contained' color='link'>
        Hello World 2
      </Button>
      
      <h1>Hello World</h1>
    </div>
  );
}



export default App;
