import React from 'react'
import '../index.css';
import { useState } from 'react';


     
const Income = ({handleIncomeAddButton}) => {


  const[income,setIncome]=useState({amountI:'',descriptionI:''});

  const handleIAChange=(e)=>{
     const a=parseInt(e.target.value);
            setIncome({...income,amountI:a})
            console.log(income)
  }
  const handleIDChange=(e)=>{
     const b=(e.target.value);
            setIncome({...income,descriptionI:b})
            console.log(income);


  }

  return (
    <div className="incomediv" >
    <div className='expensebuttondivI'>
    Income
    </div>

    <div className='amountdesdivI'>
        {/* amount */}
        <div className='amountdivI'>
        <label htmlFor="amountI" >Amount</label>
        <input style={{border:'none',borderRadius:'5px' ,borderStyle:'none' , padding:'2px 5px',outline:'none',boxShadow:'2px 2px 10px rgba(0, 0, 0, 0.2) '}}  type="number" name="amountI" value={income.amountI}  onChange={(e)=>{handleIAChange(e)}}/>
           </div>

         {/* description */}
           <div className='descriptiondivI'>
            <label htmlFor="descriptionI">Description</label>
            <input style={{border:'none',borderRadius:'5px' ,borderStyle:'none' , padding:'2px 5px',outline:'none',boxShadow:'2px 2px 10px rgba(0, 0, 0, 0.2) '}}  type="text" name='descriptionI' value={income.descriptionI} onChange={(e)=>{handleIDChange(e)}}  />

           </div>

           <div className='incomeaddbuttondiv' > 
            <button className='incomeaddbutton'
            onClick={()=>{
                handleIncomeAddButton(income);
                setIncome({amountI:'',descriptionI:''});
            }}>ADD</button></div>
           
    </div>

      



    </div>
  )
}


export default Income