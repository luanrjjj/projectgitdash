import styled from 'styled-components'
import  mixins from '../../styles/mixins';
import  media from '../../styles/media';
import  theme from '../../styles/theme';


const { colors, fonts } = theme;

export const BgColor = styled.div `
background-color:rgb(26,30,34)
`

export const Section = styled.section `

background-color:rgb(18,18,20);
margin-left:0;
margin-right:0;
width:100%;


`

export const UserInfoStyles = styled.div `
${mixins.flexCenter};
flex-direction:column;
margin-bottom:30px;
text-align:center;

${media.bp600`
padding-top:4rem;`}


.avatar {
    ${mixins.flexCenter}
    margin-top:1.5rem;
    border:0.5rem solid ${colors.green300};
    border-radius:100%;
    width:150px;
    height:150px;
    
    img {
    border-radius:100%;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  
    }
}


h1 {
    font-size: 2.5rem;
 
    color: ${colors.green50};
    ${media.bp400`
      font-size: 2rem;
     
    `};
  }

  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-top:15px;

    a {
      color: ${colors.green300};
      text-decoration:none;
    }
  }
  h3 {
    color: ${colors.green100};
   
  }
  a {
    color: ${colors.green100};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  
  .info {
    ${mixins.flexCenter};
    color:${colors.green100};
    ${media.bp600`
      display: block;
      
    `};
  
  &__item {
    ${mixins.flexCenter};
    margin: 0 0.8rem 0.5rem;
    white-space:nowrap;
  }
  }

  .icon {
    margin: 0 0.25rem 0.25rem;

  }


.stats{

  display:grid;
  grid-template-columns:repeat(3,minmax(100px,150px));
  grid-gap:1rem;
  justify-content:center;
  margin-top:2rem;
  
  &__item {
    ${mixins.flexCenter};
    flex-direction:column;
    background-color:${colors.darkGrey};
    padding:1rem;
    border-radius:0.25rem;
    text-align:center;
    ${media.bp400`
    padding:1rem 0.5rem
    `}
  }

};
.num {
        color: ${colors.green50};
        font-size: 1.5rem;
        ${media.bp400`
          font-size: 1rem;
        `};
      }

      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 0.75rem;
        color: ${colors.green100};
        ${media.bp400`
          font-size: 0.5rem;
        `};
      }
`

export const UserRepo = styled.div `

`
export const Graphs = styled.div `

`
export const Calendar = styled.div `
margin-right:60px !important;
left:5%;
padding:2rem; 
justify-content:center;
align-items:center;
color:${colors.white};
background-color:${colors.darkGrey};
border-radius:20px;
width:90%;
position:relative;






`
export const Animation = styled.div `

background-color:${colors.green700} !important;
height:92vh;
width:100%;

.animation {
  position:fixed;
  transform: translate(-50%, -50%);
  left:50%;
  top:50%;
  
}


`