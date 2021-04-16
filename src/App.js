import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import PickSidePage from './pages/PickSidePage/PickSidePage';
import PlayGamePage from './pages/PlayGamePage/PlayGamePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
// import Particles from 'react-particles-js';
// import particlesConfig from './particles-config.js';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>    
      {/* <Particles 
        className='particles'
        params={
          particlesConfig
        }/> */}
      <Route exact path='/' component={LandingPage} />
      <Route  path='/pick-side' component={PickSidePage} />
      <Route path='/play/:id' component={PlayGamePage} />
      <Footer />
    </Router>
  );
}

export default App;