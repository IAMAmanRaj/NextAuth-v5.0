import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { PUBLIC_ROUTES, ROOT, PROTECTED_SUB_ROUTES } from "./lib/routes";
const { auth } = NextAuth(authConfig);

export async function middleware(req) {
  const { nextUrl } = req;
  const session = await auth();

  const isAuthenticated = !!session?.user;
  const isPublicRoute =
    (PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
      nextUrl.pathname === ROOT) &&
    !PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

  // Special case for /forget-password
  const isAccessingForgetPasswordWhileAuthenticated =
    isAuthenticated && nextUrl.pathname.includes("/forget-password");

  if (isAccessingForgetPasswordWhileAuthenticated) {
    return NextResponse.redirect(new URL("/home", nextUrl.origin));
  }

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(ROOT, nextUrl.origin));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
