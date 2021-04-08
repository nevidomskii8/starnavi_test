import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelect } from '../Redux/action/stateAction'
import { getStateData } from '../Redux/selector/stateSelector'

export const Controll = () => {
    const state = useSelector(getStateData)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(setSelect(e.target.value))
    }

    return (
        <div className="App__controll">
            <select onChange={(e) => handleChange(e)}>
                <option value='5'>Pick mode</option>
                {Object.keys(state).map(elem =>
                    <option
                        key={elem}
                        value={state[elem].field}
                    >
                        {elem}
                    </option>
                )}
            </select>

            <center>Hover squares</center>
        </div>
    )
}