import React from 'react'
import { useSelector } from 'react-redux'

function CounterHome() {

    const counterSlice = useSelector((state: any) => state.counter)

    return <>
        <h1>Counter:{counterSlice.value}</h1>
    </>
}

export default CounterHome