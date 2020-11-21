import React from "react";
import "./style.css";

export function SearchForm(props) {
  return (
    <div className="container mb-5">
      <div className="card">
        <input type="text" className="bar form-control text-center" placeholder="What Books Should I Read?" onChange={props.handleFormSubmit} />
      </div>
      <button className="btn btn-primary mt-4" id="searchBtn" onClick={props.searchBooks}>Search Books</button>
    </div>
  );
};

export default SearchForm;