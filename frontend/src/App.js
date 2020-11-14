import './App.css';
import Navbar from '../src/components/Navbar'
import { Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button endIcon={<HomeIcon />} size="large" style={{
                              fontSize: 24,
                              color: "white", 
                              borderRadius: 50,
                              backgroundColor: "green"
                            }} 
                            onClick={()=>alert('hello')} 
                            href="#" variant='contained' >
        Room 805
      </Button>
      <Button variant='contained' color='link'>
        Hello World 2
      </Button>
      
      <h1>Hello World</h1>
    </div>
  );
}



export default App;
