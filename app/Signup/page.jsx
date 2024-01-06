'use client'

import React, {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {

  const router = useRouter();
  let [userDetails, setUserDetails] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const formOnChangeHandler = (e) =>{
    setUserDetails(prev=> {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    });
  };

  const handleSignupSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signup',userDetails);
      console.log("Signup success!",response.data);
      router.push('/api/auth/signin');
    } catch (error) {
      console.log("User signup failed");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignupSubmit}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Username</span>
                </div>
                <input 
                  type="text" 
                  name="userName" 
                  className="input input-bordered w-full max-w-xs" 
                  value= {userDetails.userName}  
                  onChange={formOnChangeHandler}  
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input type="email" 
                  name="email" 
                  className="input input-bordered w-full max-w-xs required" 
                  value={userDetails.email}
                  onChange={formOnChangeHandler}  
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input type="password" 
                  name="password" 
                  className="input input-bordered w-full max-w-xs required" 
                  value={userDetails.password}
                  onChange={formOnChangeHandler}  
                />
              </label>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            </form>
          </div>
      </div>
  </div>
  )
}

export default Signup