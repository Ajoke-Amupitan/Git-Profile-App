import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    try {
      const result = await axios(`https://api.github.com/users/Sammylaw23`);
      console.log("Result: " + result);

      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="avatar">
        <img
          src="https://avatars.githubusercontent.com/u/47615635?v=4"
          alt="avatar"
          width="150px"
        />
      </div>
      {/* <h3>Username: {data.data.login}</h3> */}
      {/* <h3>Created At: {data.data.created_at}</h3>
      <h3>Repositories: {data.data.public_repos}</h3> */}
    </>

    // <span>{result}</span>
  );
};

export default UserProfile;
