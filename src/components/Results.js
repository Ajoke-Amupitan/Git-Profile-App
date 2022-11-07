import React, { useState } from "react";
import RepoDetails from "./RepoDetails";

const Results = (props) => {
  const [repoName, setRepoName] = useState("");

  const handleChange = (e) => {
    setRepoName(e.target.innerText);
  };
  const { repos } = props;

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <li key={item.id}>
          <button href="#" onClick={handleChange}>
            {item.name}
          </button>
        </li>
      ))
    ) : (
      <li>No repos found</li>
    );
  return (
    <>
      <div>
        <ul>{listRepos}</ul>
        {/* <RepoDetails repoName={repoName} /> */}
      </div>
    </>
  );
};

export default Results;
