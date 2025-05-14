
//import React and useState hook for use with components 
import React,{useState} from "react";

//import axios for making HTTP request
import axios from 'axios';

//Define the register component
function Register() {
   //useState set to track the form data- username and password
   const[formData, setFormData]= useState({username: '',email: '', password: ''});
   
   //handleChange update the form when the state changes
   const handleChange =(e)=>{

    //e.target.name for either username or password
    //e.target value set to current value in the input
    setFormData({...formData,[e.target.name]: e.target.value});
   };
   // functiom form submission and prevent form default behavior/relaod
   const handleSubmit =async (e) =>{
    e.preventDefault();
    try{
        //POSt request
        await axios('http://localhost:3001/api/users/register',formData);
        alert('registered succesfully')
    } catch(error) {

        console.error(error);
        alert('Registration failed.')

    }
   };
   
   // this commponent returns the sign in -sign up form
   return(
    <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        {/* username input */}
    <input 
       name="username"
       placeholder="Username"
       Onchange={handleChange}/>
    
    <input 
       name="email"
       placeholder="email"
       Onchange={handleChange}/>
    
    {/*password input */}
    <input 
       name="password"
       type="password"
       placeholder="password"
       Onchange={handleChange}/>

       <button type="submit">register</button>

        </form>
   )
}

export default Register;