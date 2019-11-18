import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import Post from './Post'

export const SINGLE_CAMPAIGN_QUERY = gql`
query SingleCampaignQuery($id: ID!) {
  getCampaign (
    id:  $id
  ){
    id
    title
    description
    createdBy {
      id
      name
    }
    posts {
      id
      title
      postedBy {
        name
      }
      content
    }
  }
}
`

class SingleCampaign extends Component {

  render() {
    console.log(this.props)
    return (
      <Query query={SINGLE_CAMPAIGN_QUERY} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          let campaign = data.getCampaign

          return (
            <div className="SCContent">
              <h1>{campaign.title}</h1>
              <div className="SCMain">
                <div className="SCInfoBox">
                  <h1>Info</h1>
                  <p>Dungeon Master:  {campaign.createdBy.name}</p>
                  <p>Description:  {campaign.description}</p>
                  <p>Other Info:  </p>
                </div>
                <div className="SCPosts">
                  <div>
                    <h1>Posts:</h1>
                    <div>
                      <Link to={`/campaigns/${campaign.id}/post`}>
                        <button>Add Post</button>
                      </Link>
                    </div>
                  </div>
                  <div className = "MappedPosts">
                    {campaign.posts.map(post =>
                      <Post key={post.id} post={post} />
                    )}
                  </div>
                </div>
              </div>

            </div>
          )
        }}
      </Query>
    )
  }
}

export default SingleCampaign
