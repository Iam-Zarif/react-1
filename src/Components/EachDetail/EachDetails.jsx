import React from 'react';


import './Eachdetails.css'
const EachDetails = (props) => {
    
  let addToCart =(id) =>{
    console.log("Item added" ,id);
    localStorage.setItem("Region", id);
  }

  let addItems = () => addToCart(props.Post.region);
    return (
      <div className="Data">
        <img src={props.Post.flags.png} alt="" />
        <h2> Region = {props.Post.region}</h2>
        <h2> Area = {props.Post.area}</h2>
        <h2> Population = {props.Post.population}</h2>
        <button onClick={addItems}>Submit</button>
      </div>
    );
    
};

export default EachDetails;