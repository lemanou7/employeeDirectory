import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="text-center display-4">Employee Directory</h1>
            <p className="lead text-center">You can filter by header if you click on the heading or use the search form to filter.</p>
        </div>
    </div>
  );
};

export default Header;