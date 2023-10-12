import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function Searchbar () {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/${searchInput.trim().toLowerCase()}`)
    }
  }
  const onChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div>
      <SearchOutlined />
      <input type="text" value={searchInput} onKeyUp={onKeyUp} onChange={onChange} />
    </div>
  )
}
