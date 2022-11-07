import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";

const Profile = () => {
  const [repos, setRepos] = useState([]);

  const handleClick = async () => {
    //console.log(searchInput);

    try {
      const result = await axios(`https://api.github.com/users/ajoke-amupitan`);

      setRepos(result);
      console.log("Result: " + result);
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
      <div className="avatar">
        <img
          src="https://avatars.githubusercontent.com/u/47615635?v=4"
          alt="avatar"
          width="150px"
        />
      </div>
      <h3>Username: {repos.data.login}</h3>
      <h3>Created At: {repos.data.created_at}</h3>
      <h3>Repositories: {repos.data.public_repos}</h3>
      <h3>Following: {repos.data.following}</h3>
      <h3>Followers: {repos.data.followers}</h3>
    </>
  );
};

export default Profile;
