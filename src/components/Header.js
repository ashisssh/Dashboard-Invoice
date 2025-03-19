import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <select className="review-dropdown">
        <option>Review</option>
      </select>
      <input type="text" placeholder="Google" className="search-input" />
      <button className="header-btn">Export to Excel</button>
      <button className="header-btn">Add Document</button>
      <button className="header-btn">Connect</button>
    </div>
  );
};

export default Header;
