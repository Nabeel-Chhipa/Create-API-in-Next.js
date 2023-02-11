import React, { useEffect, useState } from 'react'
import BookItem from './BookItem'

const BooksList = () => {

    const [data, setData] = useState()
    const sendRequest = () => {
        fetch('/api/books/')
        .then((res) => res.json())
        .then((data) => setData(data.message))
        .catch((e) => console.log(e))
    }
    console.log(data)
    useEffect(() => {
        sendRequest()
    }, [])

  return (
    <div>
        <ul>
            {data && data.map((item, index) => 
                <BookItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    imgUrl={item.imgUrl}
                    test='testing'
                />
            )}
        </ul>
    </div>
  )
}

export default BooksList