//import { useState } from "react";
// import Post from "../components/Post";

const Posts = ({ posts, togglePublish }) => {
  return (
    <>
      <h1>Posts</h1>
      <div className="boxes">
        {posts.map((post) => (
          <div key={post.id} className="box">
            <h2>{post.published && post.title}</h2>
            <h3>{post.published && post.author}</h3>
            <small>{post.published && post.date}</small>
            <p>{post.published && post.content}</p>
            <button onClick={() => togglePublish(post.id, post.published)}>
              {post.published ? "Hide Post" : "Show Post"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
