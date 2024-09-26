import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CounterOperation() {

    const [number, setnumber] = useState(0)

    let dispatch = useDispatch()

    let counterSlice = useSelector((state: any) => state.counter)

    return <>
        <h1>Counter:{counterSlice.value}</h1>
        <hr />
        <h1>Increase</h1>
        <button onClick={() => dispatch({ type: 'counter/increment' })}>Increase</button>
        <hr />
        <h1>Decrease</h1>
        <button onClick={() => dispatch({ type: 'counter/decrement' })}>Decrease</button>
        <hr />
        <h1>Increment By Amount</h1>
        <input type="number" value={number} onChange={(e) => setnumber(parseInt(e.target.value))} />
        <button onClick={() => dispatch({ type: "counter/incrementByAmount", payload: number })}>Increment By Amouny</button>

    </>
}

export default CounterOperation