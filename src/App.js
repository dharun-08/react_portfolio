import './App.css';
import { React } from 'react';
import SplashScreen from './Screens/SplashScreen';
import { Route, Routes } from 'react-router-dom';
import About from './modules/About.jsx';
import Project from './modules/Projects.jsx';
import Contact from './modules/Contact.jsx';
function App() {
  return (
  <div className='App bg-gray-800'>
    <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  </div>
  );
}

export default App;
