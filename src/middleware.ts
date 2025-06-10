import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);
  const response = NextResponse.next({
    request: {
      headers,
    },
  });
  return response
}

export const config = {
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|monitoring|robots.txt|.*.svg).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
