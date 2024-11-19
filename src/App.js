import React, { useState } from 'react'
import './App.css'



function App() {
  const [value,setValue]=useState('')

 const click=(input)=>{
  setValue(value+input)
 }
 const calculate=()=>{
  try{
    const val = eval(value)
    setValue(val)
  }catch{
    setValue(value)
  }
 }  
 const clear=()=>{
  setValue('')
 }
  return (
    <div>
      <div className='content'>
       {value || 0}
      </div>
      <div  className='btn'>
        <a className='desbtn' onClick={clear}>Ac</a>
        <a className='desbtn' onClick={()=>click('+')} >+/-</a>
        <a className='desbtn' onClick={()=>click('%')}>%</a>
        <a className='funbtn' onClick={()=>click('/')}>/</a>
        </div>
        <div  className='btn'>
        <a onClick={()=>click('7')}>7</a>
        <a onClick={()=>click('8')}>8</a>
        <a onClick={()=>click('9')}>9</a>
        <a className='funbtn' onClick={()=>click('*')}>*</a>
        </div>
        <div  className='btn'>
        <a onClick={()=>click('4')}>4</a>
        <a onClick={()=>click('5')}>5</a>
        <a onClick={()=>click('6')}>6</a>
        <a className='funbtn'  onClick={()=>click('-')}>-</a>
        </div>
        <div  className='btn'>
        <a onClick={()=>click('1')}>1</a>
        <a onClick={()=>click('2')}>2</a>
        <a onClick={()=>click('3')}>3</a>
        <a className='funbtn'  onClick={()=>click('+')}>+</a>
     </div>
     <div  className='btn'>
        <a onClick={()=>click('0')}>0</a>
        <a onClick={()=>click(',')}>,</a>
        <a className='funbtn' onClick={calculate}>=</a>
    </div>
    </div>
  )
}
export default App
