import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NoMatch from './Components/NoMatch/NoMatch';
import Country from './Components/Country/Country';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/country/:nameId">
            <Country/>
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
