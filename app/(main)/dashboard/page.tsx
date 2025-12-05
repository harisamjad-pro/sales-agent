import { logoutAction } from "@/app/(auth)/logout/actions";
import { getUser } from "@/lib/supabase/getUser";
import Link from "next/link";

export default async function page() {
  const data = await getUser();
  return (
    <main className="flex-1 p-4">
      <h1 className="text-4xl font-semibold mb-4">Welcome {data?.user?.user_metadata?.full_name} to Sales Agent Dashboard</h1>
      <p className="text-base font-normal text-gray-600">Sales Agent helps you manage and optimize your sales processes efficiently.</p>
      <br />
      <div className="grid grid-cols-4">
        <div>
          <h2>Potential Clients</h2>
          <p>23</p>
        </div>
        <div>
          <h2>Pipeline Value</h2>
          <p>$523</p>
        </div>
        <div>
          <h2>Appointments</h2>
          <p>5</p>
        </div>
        <div>
          <h2>Total Sales</h2>
          <p>$122.29</p>
        </div>
      </div>
      <br />
      {!data.user ? <Link href={"/login"}>Login</Link> : <form action={logoutAction}><button>Logout</button></form>}
    </main>
  )
}
