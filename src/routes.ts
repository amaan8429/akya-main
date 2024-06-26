/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to the settings.
 * @type {string[]}
 */

export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * The prefix for the API routes.
 * Routes that start with this prefix are used for API Authentication.
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after a user logs in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
