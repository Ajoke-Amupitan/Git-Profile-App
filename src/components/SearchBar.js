import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    //console.log(searchInput);

    try {
      const result = await axios(
        `https://api.github.com/users/Sammylaw23/repos`
      );

      setRepos(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  console.log(repos);
  return (
    <>
      {/* <div>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div> */}
      <Results repos={repos} />
    </>
  );
};

export default SearchBar;
