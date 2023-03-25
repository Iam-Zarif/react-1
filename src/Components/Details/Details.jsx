import React, { useEffect, useState } from 'react';
import EachDetails from '../EachDetail/EachDetails';
import './Details.css'
const Details = () => {
    let [Posts, getPosts] =useState([]);

    useEffect(() => {
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => getPosts(data));
    },[])
    return (
      <div className="flags">
        {Posts.map((post) => console.log(post))}

        {Posts.map((post) => (
          <EachDetails Post={post}></EachDetails>
        ))}
      </div>
    );
};

export default Details;