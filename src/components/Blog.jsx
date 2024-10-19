import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const Blog = ({ blogs }) => {
  return (
    <>
      {blogs.map((el) => (
        <div key={el.id} className="blog mt-4 mb-4 px-5 pt-4 pb-4">
          <h3>{el.name}</h3>
          <p>{el.username}</p>
          <p>{el.email}</p>
          <p className='icon'><AiFillLike className='first'/> <span><AiFillDislike /></span></p>
        </div>
      ))}
    </>
  );
};

export default Blog;
