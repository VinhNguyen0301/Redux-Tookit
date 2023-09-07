import React from 'react'
import type { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './feature/counter/counterSlice'

export default function Counter() {
  const count = useSelector((state: RootState) => state.value)
  const dispatch = useDispatch()
  console.log({count})

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}