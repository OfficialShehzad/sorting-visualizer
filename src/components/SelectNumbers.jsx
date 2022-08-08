import React, {useState} from 'react'

const SelectNumbers = (props) => {
    const [amount, setAmount] = useState(0);

    const handleChange = (e) => {
        var newValue = e.target.value;
        setAmount(newValue);
    }

    const handleClick = (e) => {
        e.preventDefault()
        props.onSetAmount(amount)
    }

  return (
    <div>
        {/* <h1>{amount}</h1> */}
        <input type="number" placeholder="enter a number..." step="10" onChange={handleChange}/>
        <button onClick={handleClick}>Generate Random Array</button>
    </div>
  )
}

export default SelectNumbers