import React from "react";
import axios from "axios";

const RepoDetails = (props) => {
  handleClick(props.repoName);

  return (<h2>Repo Detail</h2>), "Repo Detail: " + props.repoName;
};

const handleClick = async (repoName) => {
  console.log(repoName);

  try {
    const result = await axios(
      `https://api.github.com/repos/Sammylaw23/${repoName}`
    );
  } catch (err) {
    console.log(err);
  }
};

export default RepoDetails;
