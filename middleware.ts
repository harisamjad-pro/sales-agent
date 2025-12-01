import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  if (!data.user && request.url.includes("/hehe")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}