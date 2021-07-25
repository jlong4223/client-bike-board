import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import routes from "./routes";
import Header from "./components/Header";

function App({ authenticated }) {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route) =>
          !authenticated && route.isProtected === true ? (
            <Redirect to="/" key={route.isProtected} />
          ) : (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
        )}
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.userInfo.isSignedIn,
  };
};

export default connect(mapStateToProps)(App);
