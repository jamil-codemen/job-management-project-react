import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import Bye from "./pages/Bye";
import Navbar from "./components/Layout/Navbar";
import JobDetailSection from "./components/Find-Jobs/JobDetailSection";
import ConnectUs from "./pages/ConnectUs";
import ApplyJobForm from "./components/Find-Jobs/apply-component/ApplyJobForm";
import Success from "./pages/Success";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/findjobs" component={FindJobs} />
          <Route exact path="/jobdetail" component={JobDetailSection} />
          <Route exact path="/applyjob" component={ApplyJobForm} />
          <Route exact path="/bye" component={Bye} />
          <Route exact path="/connectus" component={ConnectUs} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
