import Navigation from "../src/components/Navigation/index";
import Search from "../src/components/Search/index";
import Saved from "../src/components/Saved/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
  <>
  <Router>
    <Navigation />
      <Switch>
        <Route path="/" exact component={Search}/>
        <Route path="/search" component={Search}/>
        <Route path="/saved" component={Saved}/>
      </Switch>
  </Router>
  </>
  );
}


export default App;
