import React from 'react'
import '../index.css';
import { useState } from 'react';





const Expense = ({handleExpenseAddButton}) => {
    const[expense,setExpense]=useState({amount:'',description:""});

     const handleAChange=(e)=>{
        const a=parseInt(e.target.value);
               setExpense({...expense,amount:a})
               console.log(expense)
     }
     const handleDChange=(e)=>{
        const b=(e.target.value);
               setExpense({...expense,description:b})
               console.log(expense);
     }
     
     

  return (
    <div className="expensediv" >
        <div className='expensebuttondiv'>
        Expense
        </div>

        <div className='amountdesdiv'>
            {/* amount */}
            <div className='amountdiv'>
            <label htmlFor="amount" >Amount</label>
            <input style={{border:'none',borderRadius:'5px', borderStyle:'none',padding:'2px 5px',outline:'none',boxShadow:'2px 2px 10px rgba(0, 0, 0, 0.2) '}} type="number" name="amount" value={expense.amount}  onChange={(e)=>{handleAChange(e)}}/>
               </div>

             {/* description */}
               <div className='descriptiondiv'>
                <label htmlFor="description">Description</label>
                <input style={{border:'none',borderRadius:'5px' ,borderStyle:'none' , padding:'2px 5px',outline:'none',boxShadow:'2px 2px 10px rgba(0, 0, 0, 0.2) '}} type="text" name='description' value={expense.description} onChange={(e)=>{handleDChange(e)}}  />

               </div>

               <div className='expenseaddbuttondiv' > 
                <button  className='expenseaddbutton'
                onClick={()=>{
                    handleExpenseAddButton(expense);
                    setExpense({amount:'',description:''});
                }}>ADD</button></div>
               
        </div>

          



        </div>
  )
}

export default Expense