"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function MainNewsBody() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/news-data");
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   fetchData();
  // });

  const [newsData, setNewsData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=668255614b8a404389fbaabbe6b30370"
      );

      const data = await res.json();

      setNewsData(data.articles);
      return data;
    } catch (error) {
      return "There was an error: " + error;
    }
  };

  fetchData();

  console.log(newsData);

  return (
    <main className="w-3/4 ">
      <div className="w-full flex justify-between items-center">
        <div className="text-center flex flex-col gap-3">
          {newsData.map((article, index) => {
            return (
              <div key={index} className="m-3 bg-slate-300">
                <h1>{article.title}</h1>
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-56 h-56"
                />
                <p>{article.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
