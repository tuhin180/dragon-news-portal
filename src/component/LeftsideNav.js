import React, { useEffect, useState } from "react";
import Categories from "./Categories";

const LeftsideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1>All categories</h1>
      {categories.map((category) => (
        <Categories key={category.id} category={category}></Categories>
      ))}
    </div>
  );
};

export default LeftsideNav;
