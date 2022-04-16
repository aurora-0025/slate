import React, { useState } from 'react';
import SearchList from './searchList';
import styles from '../../styles/search.module.css'
import { Search as Search24 } from '@carbon/icons-react';

function Search({ details }) {    
  const [searchField, setSearchField] = useState(null);
  const [searchSubject, setSubject] = useState("maths");
  const [searchDifficulty, setDifficulty] = useState("easy");

  
    const filteredcourses = details.filter(
    course => {
      return (
        course
        .course
        .toLowerCase()
        .includes(searchField) &&
        course
        .subject
        .toLowerCase()
        .includes(searchSubject) &&
        course
        .difficulty
        .toLowerCase()
        .includes(searchDifficulty)
      );
    }
  );

  

  const handleChange = e => {
      if(e.target.value == "")
        setSearchField(null)
    else setSearchField(e.target.value.toLowerCase())
  };
  const handleSubject = e => {
    setSubject(e.target.value.toLowerCase())
  };
  const handleDifficulty = e => {
    setDifficulty(e.target.value.toLowerCase())
  };

  function searchList() {
    return (
        <SearchList filteredCourses={filteredcourses} />        
    );
  }

  return (
    <section className="searchSection">
        <div className={styles.searchWrapper}>
          <div className={styles.searchRow}>
            <div className={styles.searchBox}>
              <Search24 size={24} className={styles.searchIcon} />
              <input 
              className={styles.searchInput}
              type = "search" 
              placeholder = "Search" 
              onChange = {handleChange}
              />
            </div>
            <div className={styles.filters}>
              <select className={styles.subjectFilter} onChange={handleSubject} name="subject">
                  <option value="maths">Maths</option>
                  <option value="physics">Physics</option>
                  <option value="biology">Biology</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="">Any</option>
              </select>
              <select className={styles.difficultyFilter} onChange={handleDifficulty} name="difficulty">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="">Any</option>
              </select>
            </div>
            </div>
            {searchList()}
      </div>
    </section>
  );
}

export default Search;