import React from 'react';
import './Eachdetails.css'
const EachDetails = (props) => {
    
    return (
      <div className='Data'>
        <img src={props.Post.flags.png} alt="" />
        <h2> Region = {props.Post.region}</h2>
        <h2> Area = {props.Post.area}</h2>
        <h2> Population = {props.Post.population}</h2>
      </div>
    );
};

export default EachDetails;