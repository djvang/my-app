import React, {Component} from 'react'
import Navbar from './Navbar'
import Breadcrumb from './Breadcrumb'
import Article from './Article'
import PostComments from './PostComments'
import FormComment from './FormComment'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class PostSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comment: {}
    }

    this.addNewComment = this.addNewComment.bind(this);
  }

  addNewComment(comment) {
    this.setState({comment})
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}?_embed=comments&_expand=user`)
    .then((response) => response.json())
    .then(post => {
      this.setState({
        post
      })
    })

  }

  render() {
    const post = this.state.post;
    return (
      <div>
        <Navbar/>
        <main className="uk-main">
          <div className="uk-section">
            <div className="uk-container">
              <Breadcrumb/>
              <Article post={post}/>
              <PostComments comment={this.state.comment} comments={post.comments}/>
              <FormComment getComment={this.addNewComment}/>
            </div>
        </div>
        </main>
      </div>
    )
  }
}
