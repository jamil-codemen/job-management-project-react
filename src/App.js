import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hello from "./pages/Hello";
import Bye from "./pages/Bye";
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
      <Switch>
      <Route exact path="/"  component={Hello}/>
  <Route exact path="/bye"  component={Bye}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
