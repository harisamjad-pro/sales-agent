import { logoutAction } from "@/app/(auth)/logout/actions";
import { createClient } from "@/lib/supabase/server";

export default async function page() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <main className="flex-1 p-4">
      <h1 className="text-4xl font-semibold mb-4">Welcome {data?.user?.user_metadata?.full_name} to Sales Agent Dashboard</h1>
      <p className="text-base font-normal text-gray-600">Sales Agent helps you manage and optimize your sales processes efficiently.</p>
      <br />
      {data.user && <form action={logoutAction}><button>Logout</button></form>}
    </main>
  )
}
