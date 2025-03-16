import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  // CORS 헤더 추가
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://amuse-todo.vercel.app/"
  );
  response.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}

export const config = {
  matcher: "/api/:path*", // API 경로에만 적용
};
