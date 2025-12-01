import { createClient } from "./server";

export async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  return { user: data?.user ?? null, error };
}