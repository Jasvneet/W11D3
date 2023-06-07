import Home from "./Components/Home/home";
import SampleSurvey from "./Components/Survey/survey";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route path="/sample-survey">
        <SampleSurvey />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
    

    </>
  );
}

export default App;
