import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {CAMPAIGN_QUERY} from './CampaignList'

const CREATE_CAMPAIGN_MUTATION = gql`
  mutation CreateCampaignMutation($description: String!, $title: String!) {
    post(title: $title, description: $description) {
      id
      title
      description
      createdBy {
        name
      }
    }
  }
`

class CreateCampaign extends Component {
  state = {
    description: '',
    title: '',
  }

  render() {
    const { description, title } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="The title of the campaign"
          />
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the campaign"
          />

        </div>
        <Mutation
          mutation={CREATE_CAMPAIGN_MUTATION}
          variables={{ description, title }}
          onCompleted={() => this.props.history.push('/campaigns')}
          update={(store, { data: { post } }) => {
            const data = store.readQuery({ query: CAMPAIGN_QUERY})
            data.campaigns.unshift(post)
            store.writeQuery({
              query: CAMPAIGN_QUERY,
              data
            })
          }}
        >
          {CreateCampaignMutation => <button onClick={CreateCampaignMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateCampaign
