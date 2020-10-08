import React from "react";
import UserCard from "./UserCard";
import "./RandomUser.css";

const RandomUser = (props) => {
  const { userData } = props;
  return (
    <ul>
      {userData.map((user) => (
        <UserCard user={user} key={user.login.uuid} />
      ))}
    </ul>
  );
};

export default RandomUser;
