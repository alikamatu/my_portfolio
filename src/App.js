import { useContext } from 'react';
import About from './About/About';
import './App.scss';
import  Skills  from './Skills/Skills';
import Header from './components/Header';
import { DarkModeContext } from './darkModeContext';
import Contact from './Contact/Contact';


function App() {

  const {darkMode} = useContext (DarkModeContext);


  return (
    <div className={`theme-${darkMode? "dark" : "light"}`}>
    <div className="app" >
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
    </div>

  );
}

export default App;
