import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = ({ target: { value } }) => {
    setText(value);
    getQuery(value);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={onChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
