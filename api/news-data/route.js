import { NextResponse } from "next/server";

export async function GET(req) {
  const { keyword } = req.query;
  try {
    const res = fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
}
