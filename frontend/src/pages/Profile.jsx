import React from 'react'
import UserLogo from '../assets/userpic.jpg'
import { Button } from '@/components/ui/button'
import { coursesJson } from "./Courses";
import CourseCard from "@/components/CourseCard";

const Profile = () => {
  return (
    <div className='bg-gray-100 py-12 px-4 lg:px-0'>
      <div className='max-w-6xl mx-auto p-8 bg-gradient-to-r bg-white shadow-xl rounded-2xl mt-14'>
        <div className='flex flex-col items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-12'>
          
          {/* profile picture */}
          <div className='w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg'>
            <img src={UserLogo} alt="" className='w-full h-full object-cover'/>
          </div>

          {/* user info */}
          <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold text-blue-500'>Welcome, User</h1>
            <p className='text-lg text-gray-600 mt-3'><span className='font-bold'>Email :</span> rohitsingh@gmail.com</p>
            <p className='text-gray-600 my-1 capitalize'><span className='font-bold'>Role :</span> Instructor</p>
            <p className='text-gray-700 text-base leading-relaxed mb-4'>
              <span className='font-bold'>Bio :</span> Add Your Bio
            </p>
            <Button className={"bg-blue-500 hover:bg-blue-600"}>Edit Profile</Button>
          </div>

        </div>
      </div>

            <div className="p-5">
        <h1 className="text-4xl font-bold   text-center text-gray-800 mb-4">
          Enrolled Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-15 px-20">
        {coursesJson.splice(0, 2).map((course,uid) => {
          return <CourseCard course={course} />;
        })}
      </div>
    </div>
  )
}

export default Profile