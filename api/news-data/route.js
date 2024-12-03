import { NextResponse } from "next/server";
export async function GET() {
  // const { keyword } = req.query;
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=668255614b8a404389fbaabbe6b30370`
    );
    const data = await res.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    }); // Add a closing parenthesis and semicolon
  }
}
