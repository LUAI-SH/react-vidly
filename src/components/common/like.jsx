import React from "react";

const Like = props => {
  const { isLiked, onClick } = props;
  return (
    <i
      onClick={onClick}
      className={isLiked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden={true}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
