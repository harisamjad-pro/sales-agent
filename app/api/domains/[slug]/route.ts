import { getUser } from "@/lib/supabase/getUser";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, context: { params: Promise<{ slug: string }> }) {
  const supabase = await createClient();
  const { user } = await getUser();
  const { slug } = await context.params;

  const { data, error } = await supabase
    .from("domains")
    .select("*")
    .eq("slug", slug)
    .eq("user_id", user?.id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 200 });
}