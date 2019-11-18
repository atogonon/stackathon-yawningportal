import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'


class NavBar extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="NavBar">
        <div className="MainBar">
          <div className="Title">The Yawning Portal</div>
          <Link to="/" className="NavLink">
            Home
          </Link>
          {authToken && (
            <div className="flex">
              <Link to="/campaigns" className="NavLink">
                Campaigns
              </Link>
              <Link to="/create" className="NavLink">
                Create Campaign
              </Link>
              <Link to="/profile" className="NavLink">
                My Profile
              </Link>
            </div>
          )}
        </div>
        <div className="AuthBar">
          {authToken ? (
            <div
              className="Log"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              Logout
            </div>
          ) : (
            <Link to="/login" className="Log">
              Login
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
