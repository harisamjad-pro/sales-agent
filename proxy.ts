import { NextRequest, NextResponse } from "next/server";
import { getUser } from '@/lib/supabase/getUser';

export async function proxy(request: NextRequest) {
  const data = await getUser();

  if (!data.user && request.url.includes("/hehe")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}