import React from 'react'

export const LiIcon = () => {
  return (
    <figure className='postion-absolute left-0'>
        <svg width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" fill='none' />
        <circle cx="75" cy="50" r="20" fill="text-color" stroke="var(--text-color)" strokeWidth="5px" />
        <circle cx="75" cy="50" r="10" fill="blue" stroke="var(--text-color)" strokeWidth="1" />
        </svg>
    </figure>
  )
}
