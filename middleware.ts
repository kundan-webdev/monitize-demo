import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = new Set([
  "/",
  "/login",
  "/register",
  "/about",
  "/methodology"
]);

const AUTH_ROUTES = new Set(["/login", "/register"]);

const AUTH_COOKIE_NAMES = [
  "auth-token",
  "session",
  "session-token",
  "next-auth.session-token",
  "__Secure-next-auth.session-token"
];

function normalizePathname(pathname: string): string {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function isAuthenticated(request: NextRequest): boolean {
  return AUTH_COOKIE_NAMES.some((name) => {
    const value = request.cookies.get(name)?.value;
    return typeof value === "string" && value.trim().length > 0;
  });
}

function redirectToLogin(request: NextRequest): NextResponse {
  const loginUrl = new URL("/login", request.url);
  const originalUrl = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  if (originalUrl && originalUrl !== "/") {
    loginUrl.searchParams.set("next", originalUrl);
  }

  return NextResponse.redirect(loginUrl);
}

export function middleware(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);
  const authenticated = isAuthenticated(request);

  if (!authenticated) {
    if (PUBLIC_ROUTES.has(pathname)) {
      return NextResponse.next();
    }

    return redirectToLogin(request);
  }

  if (AUTH_ROUTES.has(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"
  ]
};
