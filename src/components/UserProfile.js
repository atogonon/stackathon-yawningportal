import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const GET_ME_QUERY = gql`
query GetMeQuery{
  getMe {
    name
    email
    characters {
      name
      race
      class
    }
  }
}
`

class UserProfile extends Component {

  render() {
    return (
      <Query query={GET_ME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          let me = data.getMe

          return (
            <div className="UPMain">
              <div className="UserProfileBox">
                <h1>Hello, {me.name}</h1>
                <h2>Your Information:</h2>
                <p>Name:  {me.name}</p>
                <p>E-Mail:  {me.email}</p>
                <div>
                  <p>Characters:</p>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default UserProfile
