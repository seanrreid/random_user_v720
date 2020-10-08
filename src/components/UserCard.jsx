import React from "react";

const UserCard = props => {
    const { user } = props;
    return (
      <li className="user-card" >
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <p>
          {user.name.first} {user.name.last}
        </p>
      </li>
    );
}

export default UserCard;