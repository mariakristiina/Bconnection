import React from "react";
import { Link } from "react-router-dom";

const PostList = props => {

  
  const sorted = [...props.posts];
  sorted.sort((a,b) => {
let date1 = new Date(a.date), date2 = new Date(b.date);
return date2 - date1;
   });


  return (
  
    <div className="postsLists">
      {sorted.map(post => {
        if(post.postType === "offer") {
        return (
          <Link className="postLinks" to={`/post/${post._id}`}>
            <div key={post._id} className="posts">
                <h3 className="postTitle">{post.title}</h3>
                <div className="containerForPostItem">
                <h6 className="postText">Date: </h6>
                <h6 className="postText2">{post.date}</h6>
                </div>
                <div className="containerForPostItem">
                <h6 className="postText">Category: </h6><h6 className="postText2">{post.category}</h6>
                </div>
              
              </div>
          </Link>
        );
       } })}
    </div>
  );
};

export default PostList;
