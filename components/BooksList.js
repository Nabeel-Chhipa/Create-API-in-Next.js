import React, { useEffect, useState } from 'react'
import BookItem from './BookItem'
import classes from '../src/styles/Books.module.css'

const BooksList = () => {

    const [data, setData] = useState()
    const sendRequest = () => {
        fetch('/api/books/')
        .then((res) => res.json())
        .then((data) => setData(data.message))
        .catch((e) => console.log(e))
    }
    useEffect(() => {
        sendRequest()
    }, [])

  return (
    <div>
        <ul className={classes.boxWrapper}>
            {data && data.map((item, index) => 
                <BookItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    imgUrl={item.imgUrl}
                    styleclasses={classes.boxWrapper__item}
                />
            )}
        </ul>
    </div>
  )
}

export default BooksList