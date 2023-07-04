
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage/>}  />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
