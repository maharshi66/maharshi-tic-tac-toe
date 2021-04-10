import LandingPage from './pages/LandingPage/LandingPage';
import PickSidePage from './pages/PickSidePage/PickSidePage';
import PlayGamePage from './pages/PlayGamePage/PlayGamePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>      
      <Route exact path='/' component={LandingPage} />
      <Route  path='/pick-side' component={PickSidePage} />
      <Route path='/play/:id' component={PlayGamePage} />
      <Footer />
    </Router>
  );
}

export default App;