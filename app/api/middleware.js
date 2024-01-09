import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublic = path === "/pages/Account";

  const token = request.cookies.get('token')?.value || '';

  if (isPublic && token) {
    return NextResponse.redirect(new URL('/pages/MyAccount', request.nextUrl));
  }
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/pages/Account", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  match: [
    '/',
    '/pages/Account',
    '/pages/MyAccount',
    '/pages/Cart',
    '/pages/CheckOut'
  ]
};
