import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";



const routesArray = [ "/about", "/projects"];

const isProtectedRoute = createRouteMatcher(routesArray);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};