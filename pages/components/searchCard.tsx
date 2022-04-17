import Link from 'next/link';
import React from 'react';
import styles from '../../styles/search.module.css'

function Card({course}) {
  return(
    <div className={styles.searchCard}>
      <Link passHref href={`/${course.subject}/${course.course}`}>
      <div>
        <h2>{course.course}</h2>
        <p>{course.subject}</p>
      </div>
      </Link>
    </div>
  );
}

export default Card;