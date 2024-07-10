import React from 'react';

const Filter = ({ filterData, category, setCategory }) => {
  return (
    <div className="flex gap-4 justify-center mt-8">
      {filterData.map(item => (
        <button
          key={item.id}
          className={`py-2 px-4 rounded-lg ${category === item.title ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors`}
          onClick={() => setCategory(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
