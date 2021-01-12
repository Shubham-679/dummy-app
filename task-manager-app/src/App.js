import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Tasks from './components/addTasks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/tasks" component={Tasks} />
      </Switch>
    </div>
  );
}

export default App;
