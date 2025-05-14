//import react and useState hook to manage component state
import React,{useState} from "react";
//import axios
import axios from 'axios';
//define Login component 
function Login() {

    //useState hook to store the values of the form fields
    const [FormData, setFormData] =useState({username: '', password: ''});

    //function called whenever input field changes
    const handleChange =(e) => {

        //update fields in the form based on the inputs namme
        setFormData({...FormData, [e.target.name]:e.target.value});
        
    };
 // function is called when the form is submitted
    const handleSubmit =async(e) => {
        //prevent default submission
        e.preventDefault();

        try {
            //send POST request
            await axios.post('http://localhost:3001/api/users/login', FormData);
        }catch(error){
            console.error(error);
            alert('Login failed')

        }
    };
    
    return(
    <form onSubmit={handleSubmit}>
    <h2>Login</h2>
    <input
    name="username"
    placeholder="Username"
    onChange={handleChange}
    />
    <input
    name="password"
    type="password"
    placeholder="password"
    onChange={handleChange}
    />
    <button type="submit">submit</button>
    </form>
    )
}
export default Login;