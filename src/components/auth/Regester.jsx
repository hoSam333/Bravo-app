import { useForm  } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import './auth.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'



function Regester() {

    if( localStorage.getItem('auth')  ){
        return <Navigate to={'/'} />
      }

    const [ resError , setResError ] = useState(null)
    const navigate = useNavigate()

    const regesterProcess = z.object({
        fristName : z.string().min(1 , { message : 'First Name is Requird !' }) ,
        lastName : z.string().min(1 , { message : 'Last Name is Requird !' }) ,
        phone : z.string().min(1 , { message : 'Phone Number is Requird !' }) ,
        email : z.string().min(1 , {message : 'Email is Requird !' } ).email(),
        password : z.string().min(5 , {message : 'password must be 5 charckters at least!' }).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {message : 'Passowrd Must have 1 special charckter or more '}) ,
        rePassword : z.string().min(1 , {message : 're-Password is Requird'}) 
    
    }).refine( same =>  same.password === same.rePassword ,{message : 'password is not Same' , path : ['rePassword']} )

    const { register , handleSubmit , formState: {errors , isDirty , isValid}  } = useForm({
        resolver : zodResolver( regesterProcess ), 
        mode:'all'
    })

   async function submitHandler(data){

    try {
        await axios.post('http://localhost:5005/register' , data)
        navigate('/login?message=complete Your Register (: ')
        
    } catch (error) {
        setResError(error.response.data )
    }

    }

    

  return (
    <div className='container my-5 '>

      <p className='text-center h1 text-uppercase my-5 ' >Regester <span style={{color:'var(--main-color)'}}> Now </span> </p>

      <div className="row">
        <div className="col-lg-12 d-flex flex-column align-items-center">

        <form className='w-75 ' onSubmit={handleSubmit(submitHandler)} noValidate>

            <div className="mb-1">
                <label htmlFor="fristName" className="form-label">Frist-Name : </label>
                <input type="text" id="fristName" { ...register('fristName') }
                    className={ errors.fristName ? "form-control is-invalid" : "form-control" }  />
                <div className="invalid-feedback"> {errors.fristName?.message} </div>
            </div>

            <div className="mb-1">
                <label htmlFor="lastName" className="form-label">Last-Name : </label>
                <input type="text" id="lastName"{ ...register('lastName') }
                    className={ errors.lastName ? 'form-control is-invalid' : "form-control" } />
                <div className="invalid-feedback"> {errors.lastName?.message} </div>
            </div>

            <div className="mb-1">
                <label htmlFor="Number" className="form-label">Phone-Number : </label>
                <input type="number" id="Number" { ...register('phone') }
                    className={ errors.phone ? 'form-control is-invalid' : "form-control" } />
                <div className="invalid-feedback"> {errors.phone?.message} </div>

            </div>

            <div className="mb-1">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" { ...register('email') }  id="email"  
                    className={ errors.email ? 'form-control is-invalid' : "form-control " } />                
                <div className="invalid-feedback"> {errors.email?.message } </div>
                <div className="invalid-feedback"> { resError  } </div>

            </div>

            <div className="mb-1">
                <label htmlFor="password" className="form-label">Password :</label>
                <input type="password" { ...register('password') } id="password"
                    className={ errors.password ? 'form-control is-invalid' : "form-control" } />
                <div className="invalid-feedback"> {errors.password?.message} </div>

            </div>

            <div className="mb-1">
                <label htmlFor="Re-password" className="form-label">Re-password :</label>
                <input type="password"  { ...register('rePassword') } id="Re-password"
                    className={ errors.rePassword ? 'form-control is-invalid' : "form-control" } />
                <div className="invalid-feedback"> {errors.rePassword?.message} </div>

            </div>
            { resError && <div className="alert alert-danger"> {resError} </div> }
            <button type="submit" className="btn btn-success"  disabled={ !isDirty || !isValid } >Submit</button>
        </form>

        </div>
      </div>
    </div>
  )
}

export default Regester
