import React from 'react'
import './CardTag.css'

const CardTag = (props) => {
  return (
    <div className='lul__tag'>
        <div className='lul__tag-inner'>{props.title}</div>
    </div>
  )
}

export default CardTag