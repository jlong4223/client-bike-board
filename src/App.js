import { Switch, Route } from "react-router-dom";

import routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  );
}

export default App;
