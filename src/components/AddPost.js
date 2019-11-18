import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { SINGLE_CAMPAIGN_QUERY } from './SingleCampaign'
import { Button, Input, TextArea, Form } from 'semantic-ui-react'

const ADD_POST_MUTATION = gql`
  mutation AddPostMutation($campaign: ID!, $title: String!, $content: String!) {
    newPost(campaign: $campaign, title: $title, content: $content) {
      id
      title
      content
      postedBy {
        name
      }
    }
  }
`

class AddPost extends Component {
  state = {
    content: '',
    title: '',
  }

  render() {
    const { content, title } = this.state
    console.log(this.props.match.params.id)
    const campaign = this.props.match.params.id
    return (
      <div className="AddPostForm">

        <h1 className="PostHeader">Add Post</h1>
        <Form className="PostForm">
          <Form.Field>
            <Input
              label="Title"
              className="PostInput"
              value={title}
              onChange={e => this.setState({ title: e.target.value })}
              type="text"
              placeholder="Post Title"
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              rows={15}
              label="Content"
              value={content}
              onChange={e => this.setState({ content: e.target.value })}
              type="text"
              placeholder="Content of Post"
            />
          </Form.Field>

        </Form>
        <div className="PostButton">
          <Mutation
            mutation={ADD_POST_MUTATION}
            variables={{ campaign: campaign, title: title, content: content }}
            onCompleted={() => this.props.history.push(`/campaigns/${this.props.match.params.id}`)}
            update={(store, { data: { newPost } }) => {
              const data = store.readQuery({
                query: SINGLE_CAMPAIGN_QUERY, variables: {
                  id: this.props.match.params.id
                }
              })
              data.getCampaign.posts.unshift(newPost)
              store.writeQuery({
                query: SINGLE_CAMPAIGN_QUERY,
                variables: { id: this.props.match.params.id },
                data
              })
            }}
          >
            {AddPostMutation => <Button onClick={AddPostMutation}>Submit</Button>}
          </Mutation>
        </div>

      </div>
    )
  }
}

export default AddPost
