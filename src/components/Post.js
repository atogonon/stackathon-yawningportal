import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className = "SinglePost">
        <h3>
          {this.props.post.title}
        </h3>
        <p className="PostAuthor">posted by {this.props.post.postedBy.name}</p>
        <p>
          {this.props.post.content}
        </p>
      </div>
    )
  }
}

export default Post
