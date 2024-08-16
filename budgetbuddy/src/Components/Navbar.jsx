import React from 'react'
import styled from 'styled-components';

const Nav=styled.div`
// border: 2px solid red;
border:none;

// display:flex;
text-align:center;
flex-direction:row;
align-items:center;
justify-content:center;
height:80px;
font-size:70px;
font-weight:bolder;
padding:10px 0px;

background-color:rgba(0, 0, 0, 0.);
margin-bottom:10px;
`;
const Navbar = () => {


  return (
    
    <Nav style={{whiteSpace:'nowrap'}}>
      <span style={{color:'#6a0dad'}}>Budget</span> 
     <span style={{color:'#00bfff'}}> Buddy</span>
     {/* <div style={{color:'black'}}>BudgetBuddy</div> */}

      </Nav>
    
      
  )
}

export default Navbar