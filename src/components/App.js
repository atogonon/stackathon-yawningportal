import React, { Component } from 'react'
import CampaignList from './CampaignList'
import CreateCampaign from './CreateCampaign'
import NavBar from './NavBar'
import Login from './Login'
import Home from './Home'
import SingleCampaign from './SingleCampaign'
import AddPost from './AddPost'
import UserProfile from './UserProfile'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="Main">
        <NavBar />
        <div className="Content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campaigns" component={CampaignList} />
            <Route exact path="/campaigns/:id" component={SingleCampaign} />
            <Route exact path="/campaigns/:id/post" component={AddPost} />
            <Route exact path="/create" component={CreateCampaign} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={UserProfile} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
