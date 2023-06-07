import Home from "./Components/Home/home";
import Survey from "./Components/Survey/survey";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route path="/sample-survey">
        <Survey />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
    

    </>
  );
}

export default App;
