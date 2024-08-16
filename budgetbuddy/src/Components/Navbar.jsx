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
height:100px;
font-size:65px;
font-weight:bolder;
padding:10px 0px;

background-color:black;
margin-bottom:10px;
`;
const Navbar = () => {


  return (
    
    <Nav style={{whiteSpace:'nowrap'}}>
      <span style={{color:'darkgreen' ,padding:'0px 0px'}}>Cash</span> 
     <span style={{color:'whitesmoke'}}> Clarity</span>
     {/* <div style={{color:'darkgreen'}}>CashClarity</div> */}

      </Nav>
    
      
  )
}

export default Navbar