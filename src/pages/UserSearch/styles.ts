import styled,{ css } from 'styled-components';
import theme from '../../styles/theme';


const { colors, fonts } = theme;

// padding : 40 20



export const Users = styled.div `
margin-top:20vh;
max-width:100%;


/* 
 a {
     background : #E5E7E9;
     border-radius: 5px;
     width:100%;
     padding:24px;
     display:block;
     text-decoration:none;

     display:flex;
     align-items:center;
     transition: transform 0.2s;

& + a {
    margin-top: 16px;
    
}

&:hover {
    transform:translateX(10px);
}

 
 div {
     margin: 0 16px;
     flex:1;

 }
 */

 .logo-container {

    display:flex;
    align-items:center;
    flex-direction:column;
    margin-bottom:50px;
   
    
 }

 .logo {
     display:flex;
     font-size:50px;
     color:${colors.gray100};

     p {
         color:${colors.green700}
     }
 }

 .input-group {
     display:flex;
     justify-content:center;
     align-itens:center;
     width:100%;

 }

 .input-search {
    position:relative;
 
    width: 500px;
    height: 35px;


 }
 input {
    height: 2.81rem;
    border: 1px solid ${colors.inputColor};;
    border-radius:20px;
    display:block;
    padding:16px;
    text-align:center;
    padding-right:30px;
    background:rgb(32,32,36);
    transition:0.4s;
    width:100%;
}

label {
    padding:2px 0 0 10px;
    color: ${colors.gray300};
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    
}

.focusInput { 
    background:${colors.gray300};
    z-index:999;
    box-shadow: 0 0 5px rgb(6,182,86);
    border-color:${colors.green500}
}

.focusInput ~ label {
  top: -25px;
  font-size: 14px;
  color: ${colors.green700};
  font-weight:bold;
}

input:focus {
    background:${colors.gray300};
    z-index:999;
    box-shadow: 0 0 5px rgb(6,182,86);
    border-color:${colors.green500}

}

input:focus ~label {
top: -25px;
  font-size: 14px;
  color: ${colors.green700};
  font-weight:bold;

}


.user-searched {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    flex-direction:column;
    border-color:${colors.green700};

    a { 
        margin-top:30px;
        background-color:${colors.gray300};
        width:500px;
        display:flex;
        align-items:center;
        text-decoration:none;
        position:relative;
        border-radius:20px;

        .user-informations { 
            margin-left:70%;
            color:${colors.green700};
        }
       

        & + a {
            margin-top: 16px;
            
        }

        &:hover {
            top:-2px;
        }
   
    }

  
    
img {
    width: 48px;
    height: 48px;
    border-radius:50%;
    padding:3px;
    
}
}

`