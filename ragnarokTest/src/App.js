import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import HomeTemp from "./templates/HomeTemp/HomeTemp";

const history = createBrowserHistory()
function App() {

  return (
    <>
      <Router history={history}>
        <Switch>
          <HomeTemp exact path='/home' Component={HomePage} />
          <HomeTemp exact path='/' Component={HomePage} />
        </Switch>
      </Router>
    </>


  );
}

export default App;
