import React, { useState, useEffect } from 'react';
import { DropdownStyles, ReposStyles, Section } from './styles';

import { RiGitRepositoryLine,RiStarSLine } from 'react-icons/ri'
import {BiGitRepoForked} from 'react-icons/bi'
import {Link} from "react-router-dom";

const Repos = ({ repoData }: any) => {

  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const map = {
    stars: 'stargazers_count',
    forks: 'forks_count',
    size: 'size',
  };


  const sortTypes = ['stars', 'forks', 'size']
  


  type typed = "stars" | "forks" | "size"

  const getTopRepos = (typed: string) => {
    let typedFilter:string;
    switch(typed) {
      case 'stars':
        typedFilter='stargazers_count';
        break;
      case 'forks':
        typedFilter='forks_count';
        break;
      case typed='size':
        typedFilter='size';
        break;
      

    }
    const LIMIT = 8;
    const sorted = repoData.filter((repo: { fork: any; }) =>
      !repo.fork).sort((a: { [x: string]: number; }, b:
        { [x: string]: number; }) => b[typedFilter] - a[typedFilter]).slice(0, LIMIT);
    



    setTopRepos(sorted)

  }
  useEffect(() => {
    if (repoData) {
      getTopRepos(sortType);
    }

  }, [repoData, sortType]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeRepoSort = (sortType: string) => {
    setSortType(sortType);
    toggleDropdown();
  }
 

console.log('topRepos',topRepos)

  return (

    <Section>
      {repoData && (
        <ReposStyles>
          <header>
            <h2>Top Repos</h2>

            <div className="dropdown-wrapper">
              <span>by</span>


              <DropdownStyles >
                <div className="dropdown_list">
                  <button className="btn-sorted">{sortType}</button>
                  <div className="dropdown_list-item" >
                    {sortTypes.map((type, i) =>
                      <a key={i}>
                        <button className="btn-list" onClick={() => changeRepoSort(type)}>{type}</button>
                      </a>

                    )}
                  </div>
                </div>

              </DropdownStyles>
            </div>
          </header>


          <div className="RepoList">
            <ul className="RepoCards">

              {topRepos && topRepos.map(repo =>
              
                <li className="RepoCard" key={repo.name}>
                  <Link to={{pathname:`${repo.html_url}`}} target="_blank" style={{textDecoration: 'none'}}>
                  <div className="CardTitle">
                    <RiGitRepositoryLine className= "CardIcon"/>
                    <h1 className="RepoName">{repo?.name}</h1>
                  </div>
                  <p>{repo.description}</p>
                  <div className="CardDetails">
                    
                   <span>{repo.language}</span>
                   <RiStarSLine className="CardIconStar"/>
                   <span>{repo.stargazers_count}</span>
                   <BiGitRepoForked className="CardIconFork"/>
                   <span>{repo.forks_count}</span>
                   <span>{repo.size} KB</span>
                  </div>
                  </Link>
                </li>

              )}
            </ul>
          </div>

        </ReposStyles>

      )}
    </Section>


  )

}

export default Repos;