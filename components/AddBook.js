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

  return (
    <>
    <div className={classes.mainWrapper}>
        <form className={classes.formWrapper}>
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