import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // Routes that can be accessed while signed out
    publicRoutes: [
        '/',
        '/store',
        '/search',
        '/contact-us',
        '/about-us',
        '/listings',
        '/listings/:id',
        '/news',
        '/news/:id',
        '/privacy-policy',
        '/terms',
        '/events',
        '/events/:id',
        '/api/webhooks(.*)',
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
    ]
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};