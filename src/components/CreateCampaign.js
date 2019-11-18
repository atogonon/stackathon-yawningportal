import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { CAMPAIGN_QUERY } from './CampaignList'
import { Button, Input } from 'semantic-ui-react'

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
      <div className="CreateCampaignForm">
        <div className="CreateCampaignInput">
          <h1 className="CCHEADER">Create a Campaign</h1>
          <Input
            label="Title"
            className="CampaignForm"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="The title of the campaign"
          />
          <Input
            label="Desc"
            className="CampaignForm"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the campaign"
          />

        </div>
        <div className = "CCButton">
          <Mutation
            mutation={CREATE_CAMPAIGN_MUTATION}
            variables={{ description, title }}
            onCompleted={() => this.props.history.push('/campaigns')}
            update={(store, { data: { post } }) => {
              const data = store.readQuery({ query: CAMPAIGN_QUERY })
              data.campaigns.unshift(post)
              store.writeQuery({
                query: CAMPAIGN_QUERY,
                data
              })
            }}
          >
            {CreateCampaignMutation => <Button onClick={CreateCampaignMutation}>Submit</Button>}
          </Mutation>
        </div>
      </div>
    )
  }
}

export default CreateCampaign
