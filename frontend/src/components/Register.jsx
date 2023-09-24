import React, { useState } from "react";
import axiosInstance from '../axios'
import { useNavigate} from "react-router-dom";


function Register() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [username , setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
        .post('register/', {
          email:email,
          user_name:username,
          password:password,
        })
        .then((res) => {
          navigate('/login');
        })
        .catch((err) => {
          console.log(err)
        });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-5 w-25 mx-auto">
        <div className="form-group">
          <label>Email address</label> 
          <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary mt-3 w-25">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
