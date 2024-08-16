import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
// border:3px solid black;
width:600px;
// height:900px;
min-height:360px;
border-radius:20px;

`;
const Heading=styled.div`
// border:2px solid blue;
height:50px;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
color:grey;
padding:7px 0px;

`;

const TransactionItem=styled.div`
display:flex;
margin:5px auto;
height:40px;
font-size:24px;
align-items:center;
border-bottom:1px solid grey; 
padding:5px 5px;
color:whitesmoke;

`;


const Transactions = ({transactions}) => {
  return (
    <Container>
      <Heading>Transactions</Heading>

        <hr />
        {transactions.length > 0 ? (
        transactions
          .filter((a) => a.amountT != null && a.descriptionT !== '' && a.status!== '')
          .map((a, index) => (
            <TransactionItem key={index}>
              <span>Item: {a.descriptionT}</span>
              <span>Price: Rs {a.amountT}</span>
              <span style={{ color: a.status === 'Loss' ? '#e8341c' : 'rgba(47, 255, 47, 0.895)' }} >{a.status}</span>
              
            </TransactionItem>
            
          ))
      ) : (
        <p>No valid transactions</p>)
          
      }
     
      
      
    
        
        </Container>
  )
}

export default Transactions