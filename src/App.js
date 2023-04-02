import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Register from "./register/register"
import Weather from "./weather/weather"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/weather' element={<Weather/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
