import React from "react";
import { Link } from "react-router-dom";

const PostListSearch = props => {
  return (
    <div className="postsLists">
      {props.posts.map(post => {
        if(post.postType === "search") {
        return (
          <Link className="postLinks" to={`/post/${post._id}`}>
            <div key={post._id} className="posts">
                <h3 className="postTitle">{post.title}</h3>
                <div className="containerForPostItem">
                <h6 className="postText">Date: </h6>
                <h6 className="postText2">{post.date}</h6>
                </div>
                {/* <div className="containerForPostItem">
                <h6 className="postText">Posted by:</h6> 
                <h6 className="postText2">{post.owner.username}</h6>
                </div> */}
                {/* <div className="containerForPostItem">
                <h6 className="postText">Type: </h6>
                <h6 className="postText2">{post.postType}</h6>
                </div> */}
                <div className="containerForPostItem">
                <h6 className="postText">Category: </h6>
                <h6 className="postText2">{post.category}</h6>
                </div>
               
              </div>
          </Link>
        );
       } })}
    </div>
  );
};

export default PostListSearch;
