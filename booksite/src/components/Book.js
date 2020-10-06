import React, { Component } from "react";
import axios from 'axios';
import { wait } from "@testing-library/react";

var queryString = window.location.search;
var queryParams = new URLSearchParams(queryString);
var bookId = queryParams.get("id");

class Book extends Component {
  shouldComponentUpdate() {
    return 1;
  } 

  constructor(props) {
    super(props);
    this.state = {
      bookData: [], // Make it explicit there's no value at the beginning.
      refreshNeeded : false
    };
  }

  componentWillMount(){
    const URL = 'http://localhost:8080/library/book/' + bookId;
    fetch(URL)
    .then(res => res.json())
    .then((data) => {
        this.setState({ bookData: data })
    })
    console.log("In the component method")
}

render() {
  console.log(this.state.bookData.title)
  return (
    <div>
          <h1>This is the Book Page</h1>
          <h3>ID: {bookId}</h3>
          <h3>Title: {this.state.bookData.title}</h3>
          <h3>Author: {this.state.bookData.author}</h3>
          <h3>Publication Year: {this.state.bookData.pubYear}</h3>
          <h3>Page Count: {this.state.bookData.pages}</h3>
          <h3>Genre: {this.state.bookData.genre}</h3>
          <h3>Rating: {this.state.bookData.rating}</h3>
        </div>
    )
  }
}
 
export default Book;