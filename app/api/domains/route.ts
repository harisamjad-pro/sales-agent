
import { slugify } from '@/lib/slugify';
import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("domains")
    .select("*")
    .order('id', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}


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