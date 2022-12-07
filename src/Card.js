import React from 'react'

const Card = ({data}) => {
  return (
    <>
        <div className=' px-5 py-6 space-y-4 border-2 w-full '>
            <p className=''>{data.brand} </p>
            <h1>{data.subCategory}</h1>
            <p>{data.productDetails}</p>
        </div>
    </>
  )
}

export default Card