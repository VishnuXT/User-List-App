import logo from './logo.svg';
import './App.css';
import Adduser from './Components/1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './Components/3';
import Displaydata from './Components/2';

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<Adduser/>}/>
<Route path='/search' element={ <Search/>}/>
<Route path='/display' element={<Displaydata/>}/>
</Routes>
    
    </BrowserRouter>
  );
}

export default App;
