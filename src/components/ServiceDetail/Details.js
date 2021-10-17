import React from "react";

const Details = (props) => {
  const { name, imageURL, description, price } = props.td;
  return (
    <div className="text-center">
      <h1>This is Service Details Page</h1>
      <h2>Name: {name}</h2>
      <p>Details: {description}</p>
      <p>Price: $ {price}</p>
      <img src={imageURL} alt="" />
    </div>
  );
};

export default Details;
