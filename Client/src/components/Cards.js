import React from 'react';

const Cards = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return <p className="text-center text-2xl text-gray-600 font-serif">No courses available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {courses.map(course => (
        <div key={course._id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <img src={course.image.url} alt={course.image.alt} className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-bold text-gray-700 mt-4">{course.title}</h3>
          <p className="text-gray-600 mt-2">{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
