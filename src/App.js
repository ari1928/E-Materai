import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  HashRouter,
  // Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

const Page404 = React.lazy(() => import('./pages/Page404/404'));
const Login = React.lazy(() => import('./pages/Login/Login'));
// const Register = React.lazy(() => import('./pages/Register/Register'));
const Layout = React.lazy(() => import('./Layout/Layout'));
const Saldo = React.lazy(() => import('./pages/Saldo/Saldo'));
const Generate = React.lazy(() => import('./pages/Generate/Generate'));
const BulkGenerate = React.lazy(() => import('./pages/BulkGenerate/BulkGenerate'));
const Stamping = React.lazy(() => import('./pages/Stamping/Stamping'));

// const session = sessionStorage.getItem("accessToken")
// const local = localStorage.getItem("accessToken")


const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken") ? (
            <Component {...props} />
          ) : (
            history.push("/login")
            // <Redirect to="/login"/>
          ))
      }}
    />
  );
};
const ProtectedRouteLogin = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken") ? (
            history.push("/")

          ) : (
            <Component {...props} />
          ))
      }}
    />
  );
};

class App extends Component {
  render() {
    return (
      <HashRouter>
        {/* <Router>  */}
        <Switch>
          {/* <ProtectedRouteLogin exact path="/register" name="Register Page" component={Register} /> */}
          <Route exact path="/404" name="Page 404" component={Page404} replace />
          <ProtectedRouteLogin exact path="/login" name="Login Page" component={Login} replace />
          <ProtectedRoute path="/" name="Home" component={Layout} replace />
          <ProtectedRoute path="/Saldo" name="/Saldo" component={Saldo} replace />
          <ProtectedRoute path="/generate" name="/generate" component={Generate} replace />
          <ProtectedRoute path="/BulkGenerate" name="/BulkGenerate" component={BulkGenerate} replace />
          <ProtectedRoute path="/Stamping" name="/Stamping" component={Stamping} replace />
        </Switch>
        {/* </Router>  */}
      </HashRouter>
    );
  }
}

export default App;
