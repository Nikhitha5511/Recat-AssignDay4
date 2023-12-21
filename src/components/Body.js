import React from 'react';

const Body=({image,title,description,rating})=>{
    return(
        <div className='container'>
        <div className='MoviesCard'
        >
        <img src={image} alt={title} />
        <div className="movieDetails">
        <h2>{title}</h2>
        <p>Plot: {description}</p>
        <h4>Rating: {rating}</h4>
      </div>
        </div>
        </div>
    )
}

export default Body;