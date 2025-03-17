import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();

  // CORS 헤더 추가
  response.headers.set(
    "Access-Control-Allow-Origin",
    process.env.FRONTEND_ORIGIN_URL!
  );

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
