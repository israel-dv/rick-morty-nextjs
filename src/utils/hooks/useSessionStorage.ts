import { useState } from 'react'

interface StorageProps {
  key: string
  initialValue: unknown
}

const useSessionStorage = ({ key, initialValue }: StorageProps) => {
  const [value, setValue] = useState(getValue())

  const setLocalStorage = (value: any) => {
    try {
      setValue(value)
      window.sessionStorage.setItem('page', JSON.stringify(value))
    } catch (error) {}
  }

  function getValue() {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  return { value, setLocalStorage }
}

export default useSessionStorage
