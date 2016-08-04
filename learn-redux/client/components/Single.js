import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

import { Link } from 'react-router';

const Single = React.createClass({
  render(){

    //postId param, from Router
    const { postId } = this.props.params

    //index of the post
    const i = this.props.posts.findIndex( (post) =>  post.code === postId);

    //the post
    const post = this.props.posts[i]
    const postComments = this.props.comments[postId] || [];


    return (
      <div className="single-photo">
        <Photo
          i={i}
          post={post}
          {...this.props}
          />
        <Comments
          postComments={postComments}
          {...this.props}
          />
      </div>
    )
  }
});

export default Single;
