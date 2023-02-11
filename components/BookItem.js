import React from 'react'

const BookItem = ({name, description, imgUrl, styleclasses}) => {
  return (
    <li className={styleclasses}>
        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
    </li>
  )
}

export default BookItem