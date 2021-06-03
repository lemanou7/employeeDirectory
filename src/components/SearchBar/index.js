import React from "react";


const SearchForm = (props) => {
  // Setting initial state

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default SearchForm;
