
/*
import React,{useState,useEffect} from 'react';
import {DropdownStyles, ReposStyles, Section} from './styles';



const Repos = ({repoData}:any)=> {
    const [topRepos,setTopRepos] = useState([]);
    const [sortType,setSortType] = useState('stars');
    const [dropdownOpen,setDropdownOpen] = useState(false)



  
   
    const map = {
        stars:'stargazers_count',
        forks :'forks_count',
        size:'size',
    };

const sortTypes = ['stargazers_count','forks_count','size']
   

type typed = "stars"|"forks"|"size"

const getTopRepos = (typed:string) => {
    const LIMIT = 8;
     const sorted = repoData.filter((repo: { fork: any; }) => 
     !repo.fork).sort((a: { [x: string]: number; },b: 
        { [x: string]: number; }) => b[typed] - a[typed]).slice(0,LIMIT);
      setTopRepos(sorted)
      
}

useEffect(() => {
    if (repoData) {
      getTopRepos(repoData);
    }
  }, []);

const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

const changeRepoSort = (sortType:string) => {
    setSortType(sortType);
    toggleDropdown();
}


  return (
      <Section>
          <ReposStyles>
              <header>
          <h2>Top Repos</h2>
      
          <div className = "dropdown-wrapper">
              <span className = "label">by</span>
              <DropdownStyles active={dropdownOpen}>
              <button className= "dropdown_button" onClick = {()=>toggleDropdown()}>
                  <label>{sortType}</label>
              </button>
              <div className="dropdown_list">
                  {sortTypes.map((type,i)=> (
                      <a className="dropdown_list-item" key={i}>
                          <button onClick = {() => changeRepoSort(type)}>{type}</button>
                      </a>
                  ))}
              </div>
              </DropdownStyles>
          </div>
          </header>
         
          </ReposStyles>
      </Section>



  )

}

export default Repos;
*/

export function teste () {
    return
}