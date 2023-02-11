import React from 'react'

const BookItem = (props) => {
    console.log(props.test)
  return (
    <li>
        <img src={props.imgUrl} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
    </li>
  )
}

export default BookItem