import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Campaign extends Component {
  render() {
    return (
      <div className="SingleCampaign">
        <h2 className="SCHeader">
          <Link to = {`/campaigns/${this.props.campaign.id}`}>
            {this.props.campaign.title}
          </Link>
        </h2>
        <div>
          <span>Created by:  </span>
          {this.props.campaign.createdBy.name}
        </div>
      </div>
    )
  }
}

export default Campaign
