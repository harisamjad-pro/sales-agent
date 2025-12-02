
import { slugify } from '@/lib/slugify';
import { getUser } from '@/lib/supabase/getUser';
import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { user } = await getUser();

  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const search = request.nextUrl.searchParams.get("search") || "";

  let query = supabase
    .from("domains")
    .select("*")
    .eq("user_id", user?.id)
    .order("id", { ascending: true });

  if (search.trim() !== "") query = query.ilike("url", `%${search}%`);

  const { data, error } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data });
}

// export async function GET(request: NextRequest) {
//   const supabase = await createClient();

//   const search = request.nextUrl.searchParams.get("search") || "";
//   const page = Number(request.nextUrl.searchParams.get("page") || "1");
//   const limit = Number(request.nextUrl.searchParams.get("limit") || "10");

//   const from = (page - 1) * limit;
//   const to = from + limit - 1;

//   let query = supabase
//     .from("domains")
//     .select("*", { count: "exact" })
//     .order("id", { ascending: true })
//     .range(from, to);

//   if (search.trim() !== "") query = query.ilike("url", `%${search}%`);

//   const { data, error, count } = await query;

//   if (error) return NextResponse.json({ error: error.message }, { status: 500 });

//   return NextResponse.json({
//     data,
//     pagination: {
//       page,
//       limit,
//       total: count || 0,
//       totalPages: count ? Math.ceil(count / limit) : 1,
//     },
//   });
// }

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const { url, image } = await request.json();
  const slug = slugify(url);
  const newUrl = url
    // Remove leading slashes
    .replace(/^\/+/, "")
    // Remove protocol + optional www.
    .replace(/^(https?:\/\/)?(www\.)?/i, "")
    // Remove query parameters
    .replace(/\?.*$/, "")
    // Remove trailing slashes
    .replace(/\/+$/, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/(^-|-$)+/g, "");

  const { data, error } = await supabase
    .from("domains")
    .insert([{ url: newUrl, slug, image }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}