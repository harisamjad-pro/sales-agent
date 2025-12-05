// import Image from "next/image";
import { getUser } from '@/lib/supabase/getUser';
import Link from 'next/link';
import { logoutAction } from '@/app/(auth)/logout/actions';
import { ButtonLogout } from './components/button';
// <Image
//   className="dark:invert"
//   src="/next.svg"
//   alt="Next.js logo"
//   width={100}
//   height={20}
//   priority
// />


// "use client";

export default async function Home() {
  const data = await getUser();
  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Sales Agent Dashboard</h1>
      <p>Select an option from the sidebar to get started.</p>
      <br />
      {data.user ? <ButtonLogout /> : <Link href={"/login"}>Login</Link>}
    </main>
  );
}
