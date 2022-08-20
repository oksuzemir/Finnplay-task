import React from "react";
import { SearchIcon } from "../../../assets/svg";

const SearchInput = (props) => {
  const {
    GamesList,
    setFilteredGames,
    inputRef,
    filterText,
    setFilterText,
  } = props;

  const updateText = (e) => {
    setFilterText(e.target.value);
    submitForm(e);
    if (inputRef.current.value.trim().length === 0) {
      setFilteredGames(GamesList.games);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className={"search-wrapper"} onSubmit={submitForm}>
      <div className={"search-svg"} onClick={submitForm}>
        <SearchIcon />
      </div>
      <input
        className={"search-input"}
        placeholder={"Search"}
        onChange={updateText}
        value={filterText}
        type={"text"}
        ref={inputRef}
        required
      />
    </form>
  );
};

export default SearchInput;
