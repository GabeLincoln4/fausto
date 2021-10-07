import {Route, Link} from "react-router-dom";
import About from "./About";
import Home from "./Home.jsx";
import AdminFeature from "./AdminFeature.jsx";
import Menu from "./Menu.jsx";
import AddMenuItem from "./AddMenuItem.jsx";
import ProductList from "./ProductList.jsx";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/:menu-section" component={ProductList} />
      <Route exact path="/admin-feature" component={AdminFeature} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/add-menu-item" component={AddMenuItem} />
    </div>
  );
}

export default App;
