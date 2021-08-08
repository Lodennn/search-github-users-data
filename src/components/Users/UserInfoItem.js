import React from "react";

const UserInfoItem = (props) => {
  return (
    <article className="item">
      <span className={props.color}>{props.icon}</span>
      <div>
        <h3>{props.value}</h3>
        <p>{props.label}</p>
      </div>
    </article>
  );
};

export default UserInfoItem;
