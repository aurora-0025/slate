import React from 'react';
import Card from './searchCard';
import styles from '../../styles/search.module.css'

function SearchList({ filteredCourses }) {
  const filtered = filteredCourses.map(course =>  <Card key={course.id} course={course} />); 
  
  return (
    <div className={styles.searchList} style={{overflowY: 'scroll', maxHeight:'30vh', position: "fixed", backgroundColor:"#ffff", zIndex: "99"}}>
      {filtered}
    </div>	
  );
}

export default SearchList;