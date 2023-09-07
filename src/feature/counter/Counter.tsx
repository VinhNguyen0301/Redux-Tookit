import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { decrement, increment } from './counterSlice'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.value)
  const dispatch = useAppDispatch()

  // omit rendering logic
}