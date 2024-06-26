import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// export default function middleware(req: NextRequest) {
//   // console.log("Middleware called", req);
//   return NextResponse.redirect(new URL("/home", req.url));
// }

export function middleware(req: NextRequest) {
  const token = false;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/foo", "/bar"],
};
