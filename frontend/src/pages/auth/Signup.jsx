import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup} from "@/components/ui/radio-group"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "sonner"

const Signup = () => {
  const navigate = useNavigate()
  const [user,setUser]=useState({
      name:"",
      email:"",
      password:"",
      role:"student"
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))

  }
   
 const handleSubmit = async (e) =>{
  e.preventDefault();
  console.log(user)
  try {
    const response = await axios.post("http://localhost:8000/api/v1/user/register",user,{
      headers:{"Content-Type":"application/json"},
      withCredentials : true
    });

    if(!response.data.success){
      toast.success(response.data.message)
      navigate("/login");
     
    }else{
      toast.error("Something went wrong")
    }

  } catch (error) {
   
    console.log(error);
  }
 
 }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      {/* <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"> */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Join us today! It's quick and easy
        </p>
        <div className="mb-4">
          <Label className={"mb-3"}>Full Name</Label>
          <Input placeholder="Enter Your Name" name="name" value={user.name} type="text" id="name" onChange={handleChange}/>
        </div>
        <div className="mb-4">
          <Label className={"mb-3"}>Email Address</Label>
          <Input placeholder="Enter Your Email" name="email" value={user.email} type="email"  onChange={handleChange}/>
        </div>
        <div className="mb-4">
          <Label className={"mb-3"}>Password</Label>
          <Input placeholder="Create Your Password" name="password" type="password"  value={user.password} onChange={handleChange}/>
        </div>
        <div className="mb-4">
          <Label className={"mb-3"}>Role</Label>
          <RadioGroup  className={'flex gap-4'} >
            <div className="flex items-center gap-3">
              <Input type="radio" id="role1" name="role" value="student" checked={user.role === 'student'} onChange={handleChange}/>
              <Label htmlFor="role1">Student</Label>
            </div>
            <div className="flex items-center gap-3">
              <Input type="radio" id="role2" name="role" value="instructor" checked={user.role === 'instructor'} onChange={handleChange}/>
              <Label htmlFor="role2">Instructor</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" className={'bg-blue-500 w-full hover:bg-blue-600'} >Sign Up</Button>
       
        <p className="text-center mt-5">Already have an Account? <Link to={'/login'}  className="text-blue-500 font-medium hover:underline">Log in</Link> </p>
         </form>
      </div>
    // </div>
  );
};

export default Signup;
