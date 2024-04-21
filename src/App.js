
import FetchNotes from './Components/FetchNotes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<><Navbar/> <Home /></>} />
          <Route path="/about" exact element={<><Navbar/> <About/></>} />
          <Route path="/fetchNotes" exact element={<><Navbar/> <FetchNotes/></>} />
          

        </Routes>


      </BrowserRouter>
      
    </>
  );
}

export default App;
