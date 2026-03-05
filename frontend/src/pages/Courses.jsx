import CourseCard from '../components/CourseCard'
import React from 'react'

export const coursesJson =  [
    {
      "id": 1,
      "title": "Full-Stack Web Development Boot Camp",
      "description": "Master both front-end and back-end technologies. Learn React, Node.js, and Express to build scalable web applications from scratch.",
      "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "category": "Web Development",
      "instructor": "Sarah Jenkins"
    },
    {
      "id": 2,
      "title": "Advanced React Patterns",
      "description": "Deep dive into hooks, render props, and higher-order components. Perfect for developers looking to build highly reusable UI components.",
      "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      "category": "Front-end",
      "instructor": "David Miller"
    },
    {
      "id": 3,
      "title": "MongoDB for Beginners",
      "description": "Understand NoSQL database design, CRUD operations, and aggregation pipelines. Learn how to manage data efficiently for modern apps.",
      "image": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      "category": "Database",
      "instructor": "Elena Rodriguez"
    },

    {
      "id": 5,
      "title": "Mastering English Grammar for Professionals",
      "description": "Improve your technical writing and communication skills. Focus on sentence structure, punctuation, and professional clarity.",
      "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
      "category": "Communication",
      "instructor": "Dr. Linda Gray"
    },
    {
      "id": 6,
      "title": "Operating Systems: Internal Architecture",
      "description": "Explore the core concepts of OS including process management, memory allocation, file systems, and concurrency.",
      "image": "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "category": "Computer Science",
      "instructor": "Dr. Alan Turing",
      "price": 49.99,
      "rating": 4.8
    },
    {
      "id": 7,
      "title": "Mastering DBMS & SQL",
      "description": "From normalization to complex joins. Learn how to design robust relational databases and write high-performance queries.",
      "image": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      "category": "Database",
      "instructor": "Monica Geller",
      "price": 29.99,
      "rating": 4.7
    },
    {
      "id": 8,
      "title": "Node.js: The Complete Guide",
      "description": "Build highly scalable back-end applications. Cover Event Loops, Streams, and building RESTful APIs with Express.",
      "image": "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      "category": "Back-end",
      "instructor": "Ryan Dahl",
      "price": 39.99,
      "rating": 4.9
    },
    {
      "id": 9,
      "title": "YouTube Content Creation Strategy",
      "description": "Learn the art of storytelling, video editing, and SEO to grow your channel and engage your audience effectively.",
      "image": "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      "category": "Digital Media",
      "instructor": "Casey Neistat",
      "price": 19.99,
      "rating": 4.5
    },
    {
      "id": 10,
      "title": "Professional Technical Writing",
      "description": "Master the art of documenting code, creating READMEs, and writing clear technical specifications for your team.",
      "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a",
      "category": "Communication",
      "instructor": "Jane Austen",
      "price": 15.00,
      "rating": 4.6
    },
    {
      "id": 11,
      "title": "Data Structures & Algorithms",
      "description": "The ultimate guide to cracking technical interviews. Learn Arrays, Linked Lists, Trees, and Dynamic Programming.",
      "image": "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
      "category": "Software Engineering",
      "instructor": "Robert Martin",
      "price": 59.99,
      "rating": 4.9
    }
  ]


const Courses = () => {
  return (
    <div className='bg-gray-100 pt-10'>
        <div className='min-h-screen max-w-7xl mx-auto py-10'>
            <div className='px-4'>
                <h1 className='text-4xl font-bold   text-center text-gray-800 mb-4'>
                  Our Courses
                </h1>
                <p className='text-center mb-5 text-gray-600 font-semibold'>Explore our curated courses to boost your skills and. Whether you're a beginner or an expert, we have something for everyone.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                       {
                          coursesJson?.map((course)=>{
                            return <CourseCard  course={course}/>
                          })
                       }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses
