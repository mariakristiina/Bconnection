import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";
import PostListSearch from "./PostListSearch";
import NewPost from "./NewPost";
import { Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import("./PostCss/posts.css");

class Posts extends Component {
  state = {
    posts: [],
    search: "",
    category: "",
    owner: "",
    addPost: false
  };

  //============================ posts functions
  getDataPosts = () => {
    axios
      .get("/post")
      .then(response => {
        // console.log(response.data)
        this.setState({
          posts: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
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

  toggleEdit = () => {
    this.setState({
      addPost: !this.state.addPost
    });
  };

  render() {
    const filteredPosts = this.state.posts.filter(post => {
      // console.log("match-id", post.match._id)
//       if ((this.state.owner === "owner" || !this.state.owner) && (this.state.category === post.category || !this.state.category))
// { return ((post.owner._id === this.props.user._id) && (this.state.category === post.category || !this.state.category))

// } else if ((this.state.owner === "match" && (post.match)) && (this.state.category === post.category || !this.state.category)){
//   return ((post.match._id === this.props.user._id) && (this.state.category === post.category || !this.state.category))
// } else if(!this.state.owner || !this.state.category || !post.match)
// {return !this.state.owner || !this.state.category || !post.match}

      return (
        (!this.state.owner ||
          ((this.state.owner === "owner" &&
            post.owner._id === this.props.user._id) ||
            (this.state.owner === "match" &&
              post.match &&
              post.match._id === this.props.user._id) &&
            (this.state.category === post.category || !this.state.category))) &&
        (this.state.category === post.category || !this.state.category)
      );
    });

    if (this.props.currentLanguage === "English") {

      return (

      <div className="post-container">
        <div className="filterPosts">
          <div className="postLabels">
            <label htmlFor="myposts">My posts</label>
          </div>
         
          <select className="filter"
            name="owner"
            id="owner"
            value={this.state.owner}
            onChange={this.handleChangeFilter}
          >
            <option className="optionBox" value="">
              --
            </option>
            <option className="optionBox" value="owner">
              My posts
            </option>
            <option className="optionBox" value="match">
              Registered
            </option>
          </select>
            
          <div className="postLabels">
            <label htmlFor="category">Filter by Category</label>
          </div>
          <select className="filter"
            name="category"
            id="category"
            value={this.state.category}
            onChange={this.handleChangeFilter}
          >
            <option value="">--</option>
            <option value="language lessons">Language lessons</option>
            <option value="tutoring">Tutoring</option>
            <option value="government appointment">
              Government appointment
            </option>
            <option value="doctor appointment">Doctor appointment</option>
            <option value="meet people">Meet people</option>
            <option value="activities for kids">Activities for kids</option>
            <option value="activities for seniors">
              Activities for seniors
            </option>
          </select>
        </div>

    <div className="postsContainer">
   <div className="postsColumn">
    <h2>Offers</h2>
  
        <PostList posts={filteredPosts} /> 
        </div>
  <div className="postsColumn">
        <h2>Searches</h2>
    
        <PostListSearch posts={filteredPosts} /> 
        </div>
</div>
        <div className="lonelyLink">
          <Link
            to="addPost"
            spy={true}
            smooth={true}
            offset={-1}
            duration={900}
            className="addPost"
            onClick={this.toggleEdit}
          ><button className="addPostButton">Add a Post</button>
          
          </Link>
        </div>

        {this.state.addPost && <NewPost 
        refreshData={this.getDataPosts} 
          
        />}
      </div>
    ) }

     // ----------------------------------------LANGUAGE CHANGE---------

    else if (this.props.currentLanguage === "German") {
    
      return (
        <div className="post-container">
        <div className="filterPosts">
          <div className="postLabels">
            <label htmlFor="myposts">Meine Posts</label>
          </div>
         
          <select className="filter"
            name="owner"
            id="owner"
            value={this.state.owner}
            onChange={this.handleChangeFilter}
          >
            <option className="optionBox" value="">
              --
            </option>
            <option className="optionBox" value="owner">
              My posts
            </option>
            <option className="optionBox" value="match">
              Registered
            </option>
          </select>
            
          <div className="postLabels">
            <label htmlFor="category">Nach Kategorien Filtern</label>
          </div>
          <select className="filter"
            name="category"
            id="category"
            value={this.state.category}
            onChange={this.handleChangeFilter}
          >
            <option value="">--</option>
            <option value="language lessons">Spranchunterricht</option>
            <option value="tutoring">Unterrichten</option>
            <option value="government appointment">
              Bestellung
            </option>
            <option value="doctor appointment">Arzt Bestellung</option>
            <option value="meet people">Leute treffen</option>
            <option value="activities for kids">Für Kinder</option>
            <option value="activities for seniors">
              Für Senioren
            </option>
          </select>
        </div>

    <div className="postsContainer">
   <div className="postsColumn">
    <h2>Bietet an</h2>
  
        <PostList posts={filteredPosts} /> 
        </div>
  <div className="postsColumn">
        <h2>Suchen</h2>
    
        <PostListSearch posts={filteredPosts} /> 
        </div>
</div>
        <div className="lonelyLink">
          <Link
            to="addPost"
            spy={true}
            smooth={true}
            offset={-1}
            duration={900}
            className="addPost"
            onClick={this.toggleEdit}
          ><button className="addPostButton">Neue Post</button>
          
          </Link>
        </div>

        {this.state.addPost && <NewPost refreshData={this.getDataPosts} />}
      </div>
      ) }
  }
}

export default Posts;
