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
    color: ${colors.grey};


    .label { 
        margin: 0 1rem;
    }
}

.repo-list {
    u1 {
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
        grid-gap : 1rem;
    }

    
}
`

export const DropdownStyles = styled.div<{active:boolean}>`
position: relative;
width:100px;
font-size:14px;
font-weight:500;


.dropdown_button {
  ${mixins.flexBetween};
  align-items:center;
  width:100%;
  font-size:14px;
  font-weight:500;
  line-height:1;
  text-align: left;
  color: ${colors.blue};
  background-color: transparent;
  border: 1px solid rgba (0,118,255,0.1);
  padding:10px 7px;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: ${colors.blue};
    background: rgba (0,118,255,0.1);
    border-color: rgba(0,118,255,0.1)
  }
  
  svg {
    margin-left: 0.5rem;
  }

  label {
    transition: ${theme.transition};
    cursor:pointer;
  }
}

.dropdown_list {
  position:absolute;
  overflow: hidden;
  width:100%;
  z-index:2;
  transition:${theme.transition};
  box-shadow: 0 5px 30px -15px rgba (0,0,0,0.2);
  opacity:0;
  visibility:hidden;
  background-color: ${colors.offWhite}
}

.dropdown_list-item {
  border-radius:0;
  transition: ${theme.transition};
  &:hover,&:focus {
    background-color: ${colors.lightestBlue};
  }

  &:first-of-type {
    button {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
  &:last-of-type {
    button {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    
}

button {
  color: ${colors.blue};
  background: rgba(0,118,255,0.1);
  padding:10px 7px;
  width: 100%;
  font-size:14px;
  font-weight:500;
  line-height:1;
  text-align:left;
}
${props =>
  props.active &&
  css`
    .dropdown_list {
      opacity: 1;
      visibility: visible;
    }
    .dropdown_button {
      background: rgba(0, 118, 255, 0.1);
      svg {
        transform: rotate(0.5turn);
      }
    }
  `}

`