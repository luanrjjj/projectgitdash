import React, { useState, useEffect } from 'react';
import { DropdownStyles, ReposStyles, Section } from './styles';

import { RiGitRepositoryLine,RiStarSLine } from 'react-icons/ri'
import {BiGitRepoForked} from 'react-icons/bi'

const Repos = ({ repoData }: any) => {

  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState('stargazers_count');
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const map = {
    stars: 'stargazers_count',
    forks: 'forks_count',
    size: 'size',
  };


  const sortTypes = ['stargazers_count', 'forks_count', 'size']


  type typed = "stars" | "forks" | "size"

  const getTopRepos = (typed: string) => {
    const LIMIT = 8;
    const sorted = repoData.filter((repo: { fork: any; }) =>
      !repo.fork).sort((a: { [x: string]: number; }, b:
        { [x: string]: number; }) => b[typed] - a[typed]).slice(0, LIMIT);
    



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