import React, { type ReactElement } from "react";
import { type PostProps } from "./formTypes";
import "./styles.scss";
const Post: React.FC<{ Post: PostProps }> = ({ Post }): ReactElement => {
  const { Description, tags, title } = Post;
  if (!Post) {
    return <></>;
  }
  return (
    <div className="box_component post">
      <h2>{title}</h2>
      <h4>{tags}</h4>
      <h4>{Description}</h4>
    </div>
  );
};

export default Post;
