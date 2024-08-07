import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from './data';
import { toast } from "react-toastify";
import Axios from 'axios';

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(category) {
    setLoading(true);
    try {
      const url = category === 'All' ? apiUrl : `${apiUrl}?category=${category}`;
      const response = await fetch(url);
      const output = await response.json();
      setCourses(output);
    } catch (error) {
      toast.error("Error in Network");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(category);
  }, [category]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      
      <div className="bg-bgDark2">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
  );
};

export default App;
