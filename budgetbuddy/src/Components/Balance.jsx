import React from 'react'
import styled from 'styled-components';

const Balancediv=styled.div`

width:100%;
margin:10px 0px;
height:80px;
font-size:40px;
color:whitesmoke;

align-items:center;

// background-color:whitesmoke;

padding:4px 4px;


`;

const Balance = ({balancevalue}) => {
  return (
    <Balancediv  style={{ whiteSpace: 'nowrap' }}>
        <span style={{padding:'20px 10px'}}>Balance : Rs</span> 
        <span style={{padding:'22px 3px', color:(balancevalue>0)?'rgba(47, 255, 47, 0.895)':'#e8341c'}}>{balancevalue}</span> 
        </Balancediv>
  )
}

export default Balance