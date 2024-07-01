import React from 'react'

function Service() {
    function handleChange(){
console.log("k")
    }
  return (
    <>
    <span>How did you like the service?</span>
    <select >
        <option onChange={handleChange}>Dissatisfied (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing! (20%)</option>
    </select>
    <br/>
    <FriendOpinion/>
    </>
  )
}

const FriendOpinion = ()=>{
    return(
    <>
        <span>How did your friend like the service?</span>
    <select>
        <option>Dissatisfied (0%)</option>
        <option>It was okay (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing! (20%)</option>
    </select>
    </>)
}

export default Service