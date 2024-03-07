import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Routes that can be accessed while signed out
    publicRoutes: [
        '/',
        '/home',
        '/search',
        '/contact-us',
        '/listings',
        '/listings/:id',
        '/news',
        '/news/:id',
        '/privacy-policy',
        '/terms',
        '/events',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe'
    ]
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};