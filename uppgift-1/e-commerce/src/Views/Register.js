import React,{ useRef, useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {signUp} from '../store/actions/userAction'
import { useDispatch,useSelector } from 'react-redux'

const Register = () => {

const dispatch = useDispatch()
const error = useSelector(state=>state.userReducer.regError) //server error the user is already exists
const token = useSelector(state=>state.userReducer.token)
const history= useHistory()

 const firstName = useRef()
 const lastName = useRef()
 const email = useRef()
 const password = useRef()
 
 const[usererr,setUsererr] = useState(false) // if the user didnot fill all the fields
 const [role,setRole]=useState('')
 


 const options = [
  { index:1,value: '', label: 'Select Role' },
  { index:2, value: 'user', label: 'user' },
  { index:3, value: 'admin', label: 'admin' },
]

const SelectComponent = () => (
  <select className="w-25 p-2 form-select "  value={role}  onChange={(e)=>
  {
    console.log(e.target.value)
    setRole(e.target.value)}
  }>
  
   {
     options.map((option) => (
           <option key={option.index} value={option.value}>{option.label}</option>
      ))
    } 
  </select>
  // <Select options={options} value={role}  onChange={(e)=>setRole(e.value)} placeholder={role}/>
)

 

 const RegisterUser=(e)=>
 {
   e.preventDefault()

   if(firstName.current.value !=='' && lastName.current.value !== '' && email.current.value !== '' && password.current.value !== ''&& role !=='')
   {
    
    let _user={
      firstName:firstName.current.value,
      lastName:lastName.current.value,
      email:email.current.value,
      password:password.current.value,
      role
    }
    
   
     dispatch(signUp(_user))
 
     firstName.current.value=''
     lastName.current.value=''
     email.current.value=''
     password.current.value=''
 
     firstName.current.focus()
    
  
   }
   else{
     setUsererr(true)
   }
 }

 useEffect(() => {
  if(token){
    
      history.push('/')
  }
  
}, [token])

    return (
      <div>
        <form className="container mt-3 bg-light p-5 shadow" onSubmit={RegisterUser}  >
          <div className=" p-3 navbar-bg shadow  text-center mb-5">
            <p className="h2 ">Are you a new customer?</p>
            <p className="h4 my-4">Register you now </p>
          </div>
          <div className="row px-4">
              <div className="col-md-6 mb-3">
                  <input 
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  ref={firstName}
                  required/>
              </div>
              <div className="col-md-6 mb-3">
                  <input 
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  ref={lastName}
                  required/>
              </div> 
           </div>

           <div className="row px-4">
              <div className="col mb-3">
                <input 
                type="email"
                className="form-control"
                placeholder="Email"
                ref={email}
                required/>
              </div>
          </div>

          <div className="row px-4">
              <div className="col mb-3">
                <input 
                type="password"
                className="form-control"
                placeholder="Password"
                ref={password}
                required/>
             </div>
         </div>

         <div className="row px-4">
             <div className="col-md-8 mb-3">
              {SelectComponent()}
              </div>
         </div> 
         <div className="row ps-4">
           <div className="col-md-6">
           <div className="form-check my-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkbox"
              required
            />
            <label className="form-check-label" htmlFor="checkbox">
              I have read and agree to the terms
            </label>
            </div>
          </div>
        </div>

         <div className="px-4 col-md-3">
           <button  type="submit" className="w-100  btn btn-gray  mt-5 text-white text-uppercase">Complete Registration</button>
         </div>
         

        <div className="mt-3 px-4">
          {error?<small className="text-danger">The user is already exists</small>:''} 

          {usererr?<small className="text-danger">Please fill in all the fields</small>:''}
        </div>       
       </form>
   
    </div>
    )
}

export default Register
