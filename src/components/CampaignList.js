import React, { Component } from 'react'
import Campaign from './Campaign'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const CAMPAIGN_QUERY = gql`
{
  campaigns {
    id
    title
    description
    createdBy {
      id
      name
    }
    posts {
      id
    }
  }
}
`

class CampaignList extends Component {
  render() {
    return (
      <div className="CampaignListPage">
        <h1>Campaigns</h1>
        <div className="mappedCampaigns">
          <Query query={CAMPAIGN_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const campaignsToRender = data.campaigns

            return (
              <div>
                {campaignsToRender.map(campaign =>
                  <Campaign key={campaign.id} campaign={campaign} />
                )}
              </div>
            )
          }}
        </Query>
        </div>

      </div>
    )
  }
}

export default CampaignList
