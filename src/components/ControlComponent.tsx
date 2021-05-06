import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStateData, setSelect } from '../redux/reducer/stateReducer'

export const Controll = () => {
  const [state, setState] = useState(null)
  const data = useSelector(getStateData)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setSelect(state))
  }

  return (
    <div className="App__controll">
      <div>
        <select onChange={(e) => setState(e.target.value)}>
          <option value="5">Pick mode</option>
          {Object.keys(data).map((elem) => (
            <option key={elem} value={data[elem].field}>
              {elem.slice(0, 1).toUpperCase() +
                elem.slice(1).replace('Mode', ' mode')}
            </option>
          ))}
        </select>
        <button onClick={() => handleClick()}>Start</button>
      </div>
      <h2>Hover squares</h2>
    </div>
  )
}
