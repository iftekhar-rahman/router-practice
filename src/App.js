import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
