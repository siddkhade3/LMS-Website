import Hero from "@/components/Hero";
import React from "react";
import { coursesJson } from "./Courses";
import CourseCard from "@/components/CourseCard";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="p-5">
        <h1 className="text-4xl font-bold   text-center text-gray-800 mb-4">
          Our Courses
        </h1>
        <p className="text-center mb-5 text-gray-600 font-semibold">
          Explore our curated courses to boost your skills and. Whether you're a
          beginner or an expert, we have something for everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-15 px-20">
        {coursesJson.splice(0, 6).map((course,uid) => {
          return <CourseCard course={course} />;
        })}
      </div>
    </>
  );
};

export default Home;
