import React, { useEffect, useState } from "react";

export default function MainNewsBody() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/news-data");
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  });

  return (
    <main className="w-3/4 bg-zinc-200">
      <div className="w-full flex justify-between items-center">
        <div></div>
      </div>
    </main>
  );
}
