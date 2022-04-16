import Link from 'next/link';
import React from 'react';

function Card({course}) {
  return(
    <div className="cardContainer">
      <Link href={`/${course.subject}/${course.course}`}>
      <div style={{margin:"5px", backgroundColor:"#DCDBDB", borderRadius: "12px", padding: "0px 10px"}}>
        <h2 style={{fontSize: "20px"}}>{course.course}</h2>
        <p>{course.subject}</p>
      </div>
      </Link>
    </div>
  );
}

export default Card;