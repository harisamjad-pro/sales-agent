"use client";

import { useState } from "react";
import { loginAction } from "./actions";

export default function Page() {
  const [error, setError] = useState("");

  async function onSubmit(formData: FormData) {
    const res = await loginAction(formData);
    if (res?.error) setError(res.error);
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <input name="email" placeholder="Email" className="border p-2 w-full" />
      <input name="password" type="password" placeholder="Password" className="border p-2 w-full" />

      <button className="bg-blue-600 text-white p-2 w-full">Login</button>

      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
