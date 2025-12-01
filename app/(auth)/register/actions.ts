"use server";

import { redirect } from "next/navigation";
import { createClient } from '@/lib/supabase/server';

export async function registerAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email, password,
    options: {
      data: {
        full_name: "Haris Champ",
        username: "harys_champ_ultra"
      }
    }
  });

  if (error) return { error: error.message };

  redirect("/login?registered=1");
}
