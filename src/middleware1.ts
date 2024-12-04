import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Redirect to "/" if the route is not "/" or "/chat/:id"
  if (pathname !== '/' && !pathname.startsWith('/chat/')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // If the route is "/chat/:id", check authentication
  if (pathname.startsWith('/chat/')) {
    const accessToken = req.cookies.get('supabase-auth-token')?.value;

    if (!accessToken) {
      // Redirect to "/" if not authenticated
      url.pathname = '/';
      return NextResponse.redirect(url);
    }

    const { data: user, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      // Clear invalid token and redirect to "/"
      const response = NextResponse.redirect(url);
      response.cookies.delete('supabase-auth-token');
      return response;
    }
  }

  // Allow request to proceed
  return NextResponse.next();
}

// Middleware configuration
export const config = {
  matcher: ['/', '/chat/:id*'], // Apply to these routes
};
