import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/signin";
import Logout from './components/logout';
import './App.scss';
import Compmenu from './components/Compmenu';
import Registration from './components/Registration'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
// import DefaultLayout from './components/DefaultLayout';

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
            <Route exact path="/" component={Login} /> 
            <Route exact path="/Compmenu" component={Compmenu}/>
            <Route exact path="/Registration" component={Registration}/> 
            <Route exact path='/logout' component={Logout}></Route> 

            {/* <Route path="/" name="Home" render={props => <Compmenu {...props}/>} /> */}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;