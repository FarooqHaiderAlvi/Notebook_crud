
import FetchNotes from './Components/FetchNotes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context/NoteState';

function App() {
  return (
    <>
      <NoteState>

        <BrowserRouter>
          <Routes>

            <Route path="/" exact element={<><Navbar /> <Home /></>} />
            <Route path="/about" exact element={<><Navbar /> <About /></>} />
            {/* <Route path="/fetchNotes" exact element={<><Navbar /> <FetchNotes /></>} /> */}


          </Routes>


        </BrowserRouter>
      </NoteState>

    </>
  );
}

export default App;
