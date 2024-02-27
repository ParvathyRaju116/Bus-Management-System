import React from 'react'
import './Search.css'
import { TextField } from '@mui/material'

function Search() {
    return (
        <div className='justify-content-center texy-center d-flex mb-5'>

            <div className="searchBody  text-center ">
                <h1 className='m-4 searchHead'>Find My Bus</h1>
                <div className='d-flex w-100 justify-content-center align-item-center'>
                    <input type="text" className='form-control w-75  ' placeholder='Search' />

                </div>            </div>

        </div>
    )
}

export default Search