import React, {Component} from 'react'
import Navbar from './Navbar'
import PostList from './PostList'
import Pagination from './Pagination'
// import posts from '../data/posts'

import axios from 'axios'

export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      limit: 6,
      page: 3,
      length: 100
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.state.limit}&_page=${this.state.page}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts: data,
        page: 1
      })
    })
  }

  changePagination(page) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.state.limit}&_page=${page}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts: data,
        page
      })
    })
  }

  handleLimit({target}) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${target.value}&_page=${this.state.page}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts: data,
        limit: target.value
      })
    })
  }


  render() {
    return (
        <div>
          <Navbar/>
          {this.state.page}
          <main className="uk-main">
            <div className="uk-section">
              <div className="uk-container">
                <h2>Posts</h2>
                <select onChange={this.handleLimit.bind(this)}>
                  <option value="2">2</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
                <Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.limit} length={this.state.length}/>
                <PostList posts={this.state.posts}/>
                <Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.limit} length={this.state.length}/>
              </div>
            </div>
          </main>
        </div>
    )
  }
}
