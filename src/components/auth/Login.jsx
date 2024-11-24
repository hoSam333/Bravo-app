import { useForm  } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import './auth.css'
import axios from 'axios'
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"







function Login() {





const navigate = useNavigate()
const [ resError , setResError ] = useState(null)
const [searchParams , setSearhParams ] = useSearchParams()


if( localStorage.getItem('auth')  ){
  return <Navigate to={'/'} />
}




    const loginProcess = z.object({

        email : z.string().min(1 , {message : 'Email is Requird !' } ),
        password : z.string().min(3 , {message : 'password must be 5 charckters at least!' })
    
    })

    const { register , handleSubmit , formState: {errors , isDirty , isValid}  } = useForm({
        resolver : zodResolver( loginProcess ), 
        mode:'all'
    })

   async function submitHandler(data){

    try {
        let res = await axios.post('http://localhost:5005/login' , data)
        localStorage.setItem('auth' , JSON.stringify( res.data ))
        navigate('/')   
        
    } catch (error) {
        setResError(error.response.data )
        if( searchParams.get('message') ){
          setSearhParams('')
        }

        
    }

    }

  return (
    <div className='container my-5 '>

      <p className='text-center h1 text-uppercase my-5 ' >Login <span style={{color:'var(--main-color)'}}> Now </span> </p>


      <div className="row">
        <div className="col-lg-12 d-flex flex-column align-items-center">

        { searchParams.get('message') === 'complete Your Register (: ' && <div className="alert alert-info border-dark w-100" > {searchParams.get('message')} </div> }
        { searchParams.get('message') === 'please login frist ...' && <div className="alert alert-info border-dark w-100" > {searchParams.get('message')} </div> }

        <form className='w-75 ' onSubmit={handleSubmit(submitHandler)} noValidate>

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


            { resError && <div className="alert alert-danger"> {resError} </div> }
            <button type="submit" className="btn btn-success"  disabled={ !isDirty || !isValid } >Submit</button>
        </form>

        </div>
      </div>
    </div>
  )
}

export default Login
