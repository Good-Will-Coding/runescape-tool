import React from "react";

const Search = props => {
  return (
    <div>
      <form onSubmit={props.getUsers}>
        <input
          type="text"
          className="form__input"
          name="userName"
          placeholder="Enter a username..."
        />
        <button className="form__btn"> <span id="form__btn-fontsize">Search</span></button>
      </form>
    </div>
  );
};

export default Search;
