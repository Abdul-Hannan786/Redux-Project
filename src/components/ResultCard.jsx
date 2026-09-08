import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='h-80 bg-white w-[22vw] rounded'>
      <h1 className='text-black'>{item.title}</h1>
    </div>
  )
}

export default ResultCard