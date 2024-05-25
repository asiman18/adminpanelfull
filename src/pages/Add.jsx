import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


function Add() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (obj) => {
        axios.post('http://localhost:3000/api', obj)
        .then(res=> console.log(res))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column', width:'35%'}}>
            <label> Name :
                <input {...register("name")} />
            </label>

            <label> Price :
                <input {...register("price")} type='number'/>
            </label>
            <label> Year :
                <input {...register("year")} type='number'/>
            </label>






            <button type="submit" >Add element</button>
        </form>
    )

}

export default Add