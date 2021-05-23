import styled, {css} from 'styled-components';
import  theme  from '../../styles/theme';
import  mixins  from '../../styles/mixins';
import media    from '../../styles/media';
import { isJsxElement, JsxEmit } from 'typescript';
import { HTMLAttributes } from 'react';
const {colors, fonts} = theme;


interface IpropStyled   {
 
  active:boolean;
}

export const Section = styled.section`
  padding: 3rem 5rem;
  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  
  /* ${props =>
    props &&
    css`
      background-color: ${colors.black};
      color: ${colors.lightestBlue};
      padding-bottom: 10rem;
      ${media.bp900`
        padding-top: 2rem;
        padding-bottom: 10rem;
      `};
    `};
 */


  & > div {
    max-width: 1400px;
    margin: 0 auto;
  }
  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      color:#FFF;
      display: inline-block;
      margin: 0;
      font-size: 1.75rem;
      background-image: linear-gradient(90deg, #d1d5da 50%, hsla(0, 0%, 100%, 0) 0);
      background-position: bottom;
      background-repeat: repeat-x;
      background-size: 10px 2px;
      padding-bottom: 6px;
      ${media.bp600`
        font-size: 1.5rem;
      `};
    }
  }
`;

export default Section;







export const ReposStyles  = styled.div`

.dropdown-wrapper {
    display:flex;
    align-itens:center;
    font-size: 1rem;
    color: ${colors.white};
    margin-left:10px;

    span {
      margin-top:1rem;
      color:${colors.gray500}
    }
}

.RepoCards {
  
 
    display: grid;
     
    grid-template-columns: repeat(3, 1fr);
     
    grid-auto-rows: auto;
     
    grid-gap: 1rem;

    list-style-type:none;
     
    
}
.RepoCard { 
  background:rgb(32,32,36);
  margin:0 0 20px;
  padding:20px;
  border-radius:2px;
  box-shadow: 0 2px 4px rgba(#000,0.2);
  cursor:pointer;
  transition:0.3s ease;
  border-radius:20px;
  position:relative;  

  transition:filter 0.2s;

    &:hover {
    top:-2px;
    z-index:999;
    box-shadow: 0 0 5px rgb(6,182,86);
    border-color:${colors.green500}

      filter: brightness(0.8);

      h1, p,div,span {
        color:${colors.green100}
      }
    }
   



  .CardIcon{
    position:absolute;
    color:${colors.gray200};
    margin-top:5px;
    
  }

  h1 {
    margin-left:20px;
    color:${colors.gray200};
    font-weight:bold;
 
  }
  
}


p {
  color:${colors.gray500};
  font-size:0.875rem;
  margin-bottom:1.875rem;

}

.CardDetails {
  padding:0.625rem 0rem 1.25rem 1.25rem;
  margin-top:1.875rem;
 
  position:absolute;;
  bottom:0;
  justify-content:space-between;
  right:0;
  left:0;

span {
color:${colors.gray300};
margin-left:5px;
}

span:last-child {
  position:absolute;
  right:0;
  margin-right:1.875rem;
  margin-top:4px;
}

.CardIconStar  {
  margin-top:0.3125rem;
  margin-left:0.625rem;
  color:${colors.gray200};
}

.CardIconFork  {
  margin-left:0.625rem;
  color:${colors.gray200};
}


}

`

export const DropdownStyles = styled.div `

.dropdown_list {
  position:relative;
  display:inline-block


}

.btn-list{ 
  border:none;
  background-color:${colors.gray700};
  cursor:pointer;
  font-weight:bold;
  color:${colors.green300}


}



.dropdown_list-item {
  display: none;
  position: absolute;
  background-color: ${colors.gray700};
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;

  
  a {
    
  
  transition:filter 0.2s;

  &:hover {
    filter: brightness(0.8);
    font-color:${colors.green500};
    z-index-999;
    

  }
  
}


}
.btn-sorted {
  margin-left:10px;
  
    background-color: ${colors.green500};
    border-radius:10px;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;

    transition:filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
   
  }

}

 a {
  color: ${colors.green100};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown_list a:hover {
  background-color:${colors.gray700};
 
}

.dropdown_list:hover .dropdown_list-item {
  display: block;
 
}
`