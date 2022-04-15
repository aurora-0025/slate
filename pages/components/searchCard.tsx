import React from 'react';

function Card({course}) {
  return(
    <div className="cardContainer">
      <div>
        <h2>{course.course}</h2>
        <p>{course.subject}</p>
      </div>
    </div>
  );
}

export default Card;