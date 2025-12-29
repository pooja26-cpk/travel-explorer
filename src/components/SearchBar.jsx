import { useEffect, useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const t = setTimeout(() => {
      onSearch(value)
    }, 300)
    return () => clearTimeout(t)
  }, [value, onSearch])

  const triggerSearch = () => {
    onSearch(value)
  }

  return (
    <div className="search-bar">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search destinations"
          aria-label="Search destinations"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="primary" onClick={triggerSearch}>Search</Button>
      </InputGroup>
    </div>
  )
}

