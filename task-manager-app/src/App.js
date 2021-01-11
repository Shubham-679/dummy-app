import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
