import { useState } from 'react'

interface CounterProps {
  initialCounter?: number
}

interface CounterValues {
  counter: number
  increment: () => void
  decrement: () => void
}

const useCounter = ({ initialCounter = 0 }: CounterProps): CounterValues => {
  const [counter, setCounter] = useState(initialCounter)

  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return { counter, increment, decrement }
}

export default useCounter
