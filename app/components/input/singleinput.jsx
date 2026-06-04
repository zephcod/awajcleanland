'use client'
import React, { useState } from 'react'
import styles from '@/app/components/input/input.module.css'
import { BsCheck, BsRocketTakeoffFill } from 'react-icons/bs'
import { CgSpinner } from 'react-icons/cg'
// import { setTimeout } from 'timers/promises'

const SingleInput = () => {

const [err, setErr] = useState(false)
const [email, setEmail] = useState('')
const [check, setCheck] =useState(0)

const handleSubmit = async (e) =>{
  e.preventDefault();
  console.log(email);
  setCheck(1)
  setTimeout(()=>{
    setCheck(2);},1000)
  setTimeout(()=>{
    setCheck(0);},5000)

  try {

    const res = await fetch("/api/subscribers", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
    body: JSON.stringify({email})
    })
    
    res.status ===201

  } catch (err) {
    setErr(true);
  }}

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form}>
          <input type="email" placeholder="Get suggestions from our AI ..." 
          className={styles.input}
          // name='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          required minLength={10}
          // onKeyDown={handleSubmit}
          />
          <button className={styles.btn}
            onClick={handleSubmit}>
            {check === 2 ? <BsCheck/> :check === 1 ? <CgSpinner/> :< BsRocketTakeoffFill /> }
          </button>
      </form>
      {err&&"something went wrong"}
     </div>
  )
}

export default SingleInput