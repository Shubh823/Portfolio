import { button } from 'leva'
import React from 'react'

const Button = ({name,isBeam=false,containerClass}) => {
  return (
    <button className={`btn ${containerClass} border border-slate-700`}>
        {isBeam && <span className='relative flex h-3 w-3 '>
            <span className='btn-ping'/>
            <span className='btn-ping_dot'/>
            </span>}
        {name}
    </button>
  )
}

export default Button
