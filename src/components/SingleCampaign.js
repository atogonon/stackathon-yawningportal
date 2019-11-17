import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SINGLE_CAMPAIGN_QUERY = gql`
{
  campaigns {
    id
    title
    description
    createdBy {
      id
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
      <Query query={CAMPAIGN_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const campaignsToRender = data.campaigns

          return (
            <div>
              {campaignsToRender.map(campaign => <Campaign key={campaign.id} campaign={campaign} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default CampaignList
