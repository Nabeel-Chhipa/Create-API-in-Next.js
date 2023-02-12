import React, { useState } from 'react'
import classes from '../src/styles/Form.module.css'

const AddBook = () => {
    const [inputs, setInputs] = useState({
        name:'',
        description:'',
        imgurl:''
    })
    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }) )
    }
    const sendRequest = () => {
        fetch('/api/books/', {
            method: 'POST',
            body: JSON.stringify({
                name: inputs.name,
                description: inputs.description,
                imgUrl: inputs.imgurl
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
        if(!inputs.name && !inputs.description && !inputs.imgurl) {
            return;
        }
        else {
            sendRequest()
        }
    }

  return (
    <>
    <div className={classes.mainWrapper}>
        <form onSubmit={handleSubmit} className={classes.formWrapper}>
            <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={inputs.name} onChange={handleChange} />
            </div>

            <div>
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' value={inputs.description} onChange={handleChange} />
            </div>

            <div>
            <label htmlFor='imgurl'>Image Url</label>
            <input type='text' name='imgurl' value={inputs.imgurl} onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
   )
}

export default AddBook