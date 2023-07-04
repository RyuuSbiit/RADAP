
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage  from './pages/Home';

import Basement from './pages/basement'
import About_Us from './pages/Abaut us';
import Progress from './pages/Progress';
import Fire from './pages/Fire';
import Chui from './pages/Chui';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Routes>
        
        <Route path='/Progress' element={<Progress/>}     /> 
        <Route path={'/'} element={<HomePage/>}  />
        <Route path={'/About_Us'} element={<About_Us/>} />
        <Route path='/Northern_fire' element={<Fire/>}/>
        <Route path='/Chui-Estuary' element={<Chui/>}/>
        
      </Routes>
      <Basement/>
      </BrowserRouter>
    </div>
  );
}

export default App;
