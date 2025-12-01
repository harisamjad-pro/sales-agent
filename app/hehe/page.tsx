import { createClient } from '@/lib/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div>
      <h1>{data?.user?.email}</h1>

      <pre>{JSON.stringify(data?.user, null, 2)}</pre>

      <div>Check after logged in</div>
    </div>
  );
}
