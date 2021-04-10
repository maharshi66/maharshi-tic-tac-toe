import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage/LandingPage';
import PickSidePage from './pages/PickSidePage/PickSidePage';
import PlayGamePage from './pages/PlayGamePage/PlayGamePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
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