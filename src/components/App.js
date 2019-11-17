// import React from 'react';
// import logo from '../logo.svg';
// import '../styles/App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import CampaignList from './CampaignList'
import CreateCampaign from './CreateCampaign'
import NavBar from './NavBar'
import Login from './Login'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="center w85">
        <NavBar />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campaigns" component={CampaignList} />
            <Route exact path="/campaigns/:id" component={Home} />
            <Route exact path="/create" component={CreateCampaign} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
