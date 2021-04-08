import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getStateSelect } from '../Redux/selector/stateSelector'

export const Square = () => {
    const stateSquare = useSelector(getStateSelect)
    const [square, setSquare] = useState([])
    const classSquare = stateSquare === '5' ? 'easy'
        : stateSquare === '10' ? 'medium'
            : stateSquare === '15' ? 'hard' : 'easy'

    useEffect(() => {
        const array = new Array(+stateSquare).fill(0)
        setSquare(array)
    }, [stateSquare])

    return (
        <div className="App__square" >
            <div className="App__square__container">
                {square.map((row, index) =>
                    <div key={index}
                        className={`row ${index + 1}`}
                    >
                        {square.map((col, i) =>
                            <div key={i}
                                onMouseEnter={() => console.log(`row ${index + 1} col ${i + 1   }`)}
                                className={`col ${i + 1} ${classSquare}`}></ div>
                        )}
                    </div>)}
            </div>
        </div>
    )
}