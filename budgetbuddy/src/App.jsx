
import './App.css'
import styled from 'styled-components';
import React from 'react';
import Navbar from './Components/Navbar'
import Balance from './Components/Balance';
import { useState } from 'react';
import Expense from './Components/Expense';
import Income from './Components/Income';
import Transactions from './Components/Transactions';

//styled components 
const MainContainer=styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:0px;
// border:2px solid blue;

`;

const SContainer=styled.div`
// border:2px solid black;
display:flex;
align-items:center;
flex-direction:row;
 max-width:1100px;
height:350px;
justify-content:space-between;
padding:10px 10px;
margin:40px 10px;
`;




//Main component
function App() {



  const[balancevalue,setBalanceValue]=useState(0);
  const[transactions,setTranscations]=useState([{amountT:null,descriptionT:'',status:''},])

const handleExpenseAddButton=(expense)=>{
 if(expense.amount!=0 && expense.description!="none" && expense.amount>0 ){
  setTranscations([...transactions,{amountT:expense.amount,descriptionT:expense.description,status:"Loss"}])
console.log(expense.amount,expense.description);
console.log(transactions);
if(expense.amount>0){
setBalanceValue(balancevalue-expense.amount)}
}
else{
  console.log("No Trasactions");

 } 
}


const handleIncomeAddButton=(income)=>{
  if(income.amountI!='' && income.descriptionI!='' && income.amountI>0){
    setTranscations([...transactions,{amountT:income.amountI,descriptionT:income.descriptionI,status:"Gain"}])
  console.log(income.amountI,income.descriptionI);
  console.log(transactions);
  
  setBalanceValue(balancevalue+income.amountI)
  }
  else{
    console.log("No Trasactions");
  
   } 
}

  return (
    <MainContainer>
   <Navbar />
   <Balance balancevalue={balancevalue}/>
   <SContainer>
<Expense handleExpenseAddButton={handleExpenseAddButton} />
<Income handleIncomeAddButton={handleIncomeAddButton}/>
   </SContainer>
<Transactions transactions={transactions} />
   </MainContainer>
  )
}

export default App
