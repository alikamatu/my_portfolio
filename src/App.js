import { useContext } from 'react';
import './App.scss';
import { DarkModeContext } from './darkModeContext';
import { Profile } from './profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bio from './bio/Bio';
import Skills from './skills/Skills';
import Contact from './Contact/Contact';
import ProjectDisplay from './projectdisplay/ProjectDisplay';

function App() {

  const {darkMode} = useContext (DarkModeContext);
  

  return (
    <div className={`theme-${darkMode? "dark" : "light"}`}>
    <div className="app" >
      <Profile />
        <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<ProjectDisplay />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
    </div>

  );
}

export default App;
