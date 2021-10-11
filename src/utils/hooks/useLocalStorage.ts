import { useState } from 'react'

interface StorageProps {
  key: string
  initialValue: unknown
}

const useLocalStorage = ({ key, initialValue }: StorageProps) => {
  const [value, setValue] = useState(getValue())

  const setLocalStorage = (value: any) => {
    try {
      setValue(value)
      window.localStorage.setItem('page', JSON.stringify(value))
    } catch (error) {}
  }

  function getValue() {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  return { value, setLocalStorage }
}

export default useLocalStorage
