import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Categories = () => {
  const categoryNews = useLoaderData();

  return (
    <div>
      <p>this category has {categoryNews.length} news</p>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Categories;
