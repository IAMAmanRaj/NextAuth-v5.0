import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { PUBLIC_ROUTES, LOGIN, ROOT } from "./lib/routes";
const { auth } = NextAuth(authConfig);

export async function middleware(req) {
  const { nextUrl } = req;
  const session = await auth();

  const isAuthenticated = !!session?.user;
  const isPublicRoute =
    ((PUBLIC_ROUTES.find(route=>PUBLIC_ROUTES.find(route=>nextUrl.pathname.startsWith(route)) ||nextUrl.pathname

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
