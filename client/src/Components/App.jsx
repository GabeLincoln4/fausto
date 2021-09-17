import {Route, Link} from "react-router-dom";
import About from "./About";
import Home from "./Home.jsx";
import AdminFeature from "./AdminFeature.jsx";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin-feature" component={AdminFeature} />
    </div>
  );
}

export default App;
