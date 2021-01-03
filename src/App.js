import { Container} from '@material-ui/core';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import NoFound from './components/NotFound/NoFound';
import Events from './components/Events/Events';
import Register from './components/Register/Register';


function App() {
  return (
    <Container>
        <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/events">
            <Events/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
        </Router>
        
    </Container>
  );
}

export default App;
