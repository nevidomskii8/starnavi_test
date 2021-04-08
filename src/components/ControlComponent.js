import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelect } from '../Redux/action/stateAction'
import { getStateData } from '../Redux/selector/stateSelector'

export const Controll = () => {
    const [state, setState]= useState(null)
    const data = useSelector(getStateData)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setSelect(state))
    }

    return (
        <div className="App__controll">
            <div>
                <select onChange={(e) => setState(e.target.value)}>
                    <option value='5'>Pick mode</option>
                    {Object.keys(data).map(elem =>
                        <option
                            key={elem}
                            value={data[elem].field}
                        >
                            {elem}
                        </option>
                    )}
                </select>
                <button onClick={() => handleClick()}>Start</button>
            </div>
            <center>Hover squares</center>
        </div>
    )
}