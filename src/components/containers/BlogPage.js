import React from 'react';

import BlogList from './../ui/BlogList';
//import PieChart from './../ui/PieChart';
import { posts } from './../../constants/static/data.js';
import { cloneDeep } from 'lodash/lang';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
    this.addLike = this.addLike.bind(this);
  }

  addLike(id) {
    const {posts} = cloneDeep(this.state);
    const postIndex = posts.findIndex((item) => item.key === id);

    if (postIndex > -1) {
      const newPost = posts[postIndex];
      newPost.details.likes = +newPost.details.likes + 1;
      this.setState({posts});
    }
  }

  render() {
    return (
      <div>
        <BlogList posts={this.state.posts} addLike={this.addLike} />
        {/*<PieChart columns={[ ...this.state.posts.map( item =>
          [item.text, item.details.likes]) ]} />*/}
      </div>
    );
  }
}
