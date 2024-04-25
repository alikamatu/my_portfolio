import About from './About/About';
import './App.css';
import  Skills  from './Skills/Skills';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
