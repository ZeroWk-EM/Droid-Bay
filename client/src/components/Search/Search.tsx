import { useState } from "react";

const Search = ({ onSearchTextChange }:any) => {
  const [textInInput, setTextInInput] = useState("");

  return (
    <div className="p-3 m-4 bg-dark text-white rounded">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Insert droid name"
          onChange={(event) => {
            setTextInInput(event.target.value);
          }}
        />
        <button
          className="btn btn-outline-light"
          type="button"
          id="search-droid"
          onClick={() => {
            onSearchTextChange(textInInput);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
