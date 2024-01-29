import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <>
     {/* <h1>Little Lemon Restaurant</h1> */}
    <BrowserRouter>
    <Nav/>
     <Header/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
