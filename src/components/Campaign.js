import React, { Component } from 'react'

class Campaign extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.campaign.title}
        </h2>
        <div>
          {this.props.campaign.description}
        </div>
      </div>
    )
  }
}

export default Campaign
