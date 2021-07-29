import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import Bye from "./pages/Bye";
import Navbar from './components/Layout/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
      <Switch>
      <Route exact path="/"  component={Home}/>
      <Route exact path="/findjobs"  component={FindJobs}/>
  <Route exact path="/bye"  component={Bye}/>
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
