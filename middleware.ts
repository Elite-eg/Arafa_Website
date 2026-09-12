import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/en")) {
    const cleanPath = pathname.replace(/^\/ar(\/|$)/, "/");
    const formattedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;

    const url = request.nextUrl.clone();
    url.pathname = `/en${formattedPath === "/" ? "" : formattedPath}`;
    return NextResponse.redirect(url);
  }

  if (pathname === "/en") {
    const url = request.nextUrl.clone();
    url.pathname = `${pathname}/home`; // redirect to landing
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
