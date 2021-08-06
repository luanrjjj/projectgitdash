import styled from 'styled-components';
import theme from '../../styles/theme'
import {rgb, shade} from 'polished';

const { colors, fonts } = theme;

export const NavHeader  = styled.div `

z-index:999;
top:0;
left:0;
right:0;
height:50px;
background:rgb(26,30,34);
display:flex;


`

export const NavLogo = styled.div`

background-color:transparent;
align-items:center;
display:flex;
margin-right: 5px;
justify-content:center;

.logo { 
    text-decoration:inherit;
    color:#EDF2F7;
    font-weight:bold;
    margin-left:0.625rem;
    font-size:30px;
}

p {
    
 color:${colors.green700};
 font-size:30px;
}

`

export const Title = styled.h1`
font-size:48px;
color:#3A3A3A;
max-width:45px;
line-height:56px;
margin-top:80px;
margin-left:96px;
`




export const Form = styled.form`


margin-top:0.625rem; 
margin:auto;
`
export const InputContainer = styled.div`

position:relative;
margin-left:800px;


i {
    position:absolute;
    padding:2px;
    color:#EDF2F7;
    margin-top:0.8rem;
    margin-right:1rem;
    padding:2px;
    right:0; 
    cursor:pointer;
    
}

input {
    height: 2.81rem;
    border-radius:20px;
    color:#3a3a3a;
    border-color:${colors.inputColor};
    background-color: ${colors.inputColor};
    width:320px;
    padding:16px;
    text-align:center;
    padding-right:30px;
    

    &::placeholder {
        color:#EDF2F7;
    }
}


`