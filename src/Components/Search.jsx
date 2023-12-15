import React from 'react'
import style from './nav.module.css'
const Search = () => {
  return (
    <div id={style.input}>
      <input  type="text" placeholder='Search For Products,Brands and More' />
    </div>
  )
}

export default Search