//state: [] ****************DONE

//setState: api call get posts **************DONE

//filter for categories, date, owner, match

import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";
import NewPost from "./NewPost";

class Posts extends Component {
  state = {
    posts: [],
    search: "",
    category: "",
    owner: ""
  };

  //============================ posts functions
  getDataPosts = () => {
    axios
      .get('/post')
      .then(response => {
        // console.log(response.data)
        this.setState({
          posts: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  };

  componentDidMount() {
    this.getDataPosts();
  }

  //=============================== filter functions


  handleChangeFilter = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };



  render() {

    const filteredPosts = this.state.posts.filter(post => {
      // console.log("match-id", post.match._id)

      return (

        ((!this.state.owner) ||
          ((this.state.owner === "owner" && post.owner._id === this.props.user._id) ||

            (((this.state.owner === "match") && post.match) && post.match._id === this.props.user._id)) &&

          (this.state.category === post.category || !this.state.category))

        && (this.state.category === post.category || !this.state.category)

      );
    });

    return (
      <div className="post-container" >

        <label htmlFor="myposts" > Filter my posts</label>
        <select
          name="owner"
          id="owner"
          value={this.state.owner}
          onChange={this.handleChangeFilter}

        >
          <option value="">--</option>
          <option value="owner">My posts</option>
          <option value="match">Registered</option>
        </select>



        <label htmlFor="category">Filter by Category</label>
        <select
          name="category"
          id="category"
          value={this.state.category}
          onChange={this.handleChangeFilter}
        >
          <option value="">--</option>
          <option value="language lessons">Language lessons</option>
          <option value="tutoring">Tutoring</option>
          <option value="government appointment">Government appointment</option>
          <option value="doctor appointment">Doctor appointment</option>
          <option value="meet people">Meet people</option>
          <option value="activities for kids">Activities for kids</option>
          <option value="activities for seniors">Activities for seniors</option>
        </select>


        <PostList posts={filteredPosts} />

        <NewPost
          refreshData={this.getDataPosts}
        />
      </div>
    )
  }


}



export default Posts;

