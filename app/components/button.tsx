"use client";

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { LuChevronRight, LuLoader, LuPlus } from 'react-icons/lu';
import { logoutAction } from '@/app/(auth)/logout/actions';

export const Btn = () => {
  return <button onClick={() => alert('HEHE')}>CLICK</button>
}
export function ButtonShowDomain() {
  return (
    <button className="bg-transparent hover:bg-neutral-200 rounded-sm p-0.5 absolute left-2 cursor-pointer z-10 opacity-0 group-hover:opacity-100">
      <LuChevronRight className="size-4 text-neutral-400" onClick={() => console.log("Display Domains!!!")} />
    </button>
  )
}

export function ButtonAddDomain({ onAdded }: { onAdded: () => void }) {
  const [openForm, setOpenForm] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const url = formData.get('url') as string;
    const image = formData.get('image') as string;

    try {
      await fetch('/api/domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, image }),
      });

      onAdded();
      // router.refresh();

    } catch (error) {
      console.error('Error adding domain:', error);
    } finally {
      setOpenForm(false);
    }
  }

  return (
    <>
      <button className="bg-transparent hover:bg-neutral-200 rounded-sm p-0.5 absolute right-2 cursor-pointer z-10 group-hover:opacity-100 opacity-0" onClick={() => setOpenForm(!openForm)}>
        <LuPlus className="size-4 text-neutral-400" />
      </button>

      {openForm && (
        <div className="bg-black/95 backdrop-blur-xs fixed inset-0 flex justify-center items-end z-20">
          <div className='bg-gray-50 w-full absolute left-0 bottom-0 p-6 flex flex-col gap-4'>
            <h2 className="text-2xl font-semibold">Add your domain for chatbot</h2>

            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
              <label htmlFor="url">
                Domain URL
                <input type="text" name="url" id="url" placeholder="e.g. something.com" className="px-4 py-2 rounded-lg border border-gray-200 w-full" />
              </label>

              <label htmlFor="image">
                Domain Icon
                <input type="text" name="image" id="image" placeholder='Image url' className="px-4 py-2 rounded-lg border border-gray-200 w-full" />
              </label>

              <button type="submit" className="px-4 py-2 rounded-lg bg-purple-600 text-white w-full">
                Add Domain
              </button>
            </form>

            <button onClick={() => setOpenForm(false)} className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export function ButtonLogout() {
  const [loader, setLoader] = useState(false);
  const logout = async () => {
    setLoader(true);
    await logoutAction();
  }
  return <button onClick={logout} className={`bg-red-500 p-2 cursor-pointer flex items-center gap-1.5 ${loader && "opacity-50"}`} disabled={loader}>
    {loader && <LuLoader className="size-5 animate-spin" />}
    Logout
  </button>
}