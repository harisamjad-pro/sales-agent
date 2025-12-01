
import Breadcrumbs from '@/app/components/client/Breadcrumbs';
import { AllDomains } from '@/app/components/server/Domains';
import Link from 'next/link'
import React, { Suspense } from 'react';
import { LuCircle, LuDot, LuGlobe, LuPenLine } from 'react-icons/lu'
import { createdAt } from '@/utils/createdAt';
import { Domains } from '@/utils/type';
import Image from 'next/image';
import SearchBar from '@/app/components/SearchBar';

export default async function Page({
  searchParams
}: {
  searchParams?: Promise<{ search?: string, page?: string }>;
}) {
  const { search = "" } = await searchParams ?? {};

  return (
    <>
      <Breadcrumbs />
      <div className="space-y-4 px-24 py-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">Manage Domains</h1>
          <p className="text-stone-500 font-normal text-sm">Manage settings, training data, and products for your domain.</p>
        </div>
        <SearchBar placeholder="Search domains..." />
        <Suspense fallback={<div>Loading domains...</div>}>
          <D query={search} />
        </Suspense>
      </div>
    </>
  )
}

// Server Component Part
const D = async ({ query }: { query: string }) => {
  const data = await AllDomains(query);
  // return <List data={data} />
  return <List data={data?.data} />
}

// UI Skeleton (Client)
export const List = ({ data }: { data: Domains[] }) => {
  return (
    <div className="space-y-0 -mx-2">
      {data.map((item: Domains) => (
        <Link key={item.id} href={`/domains/${item.slug}`} className="px-2 pe-2.5 py-0.5 flex flex-col gap-0 hover:bg-stone-200 rounded-lg group">
          <div className="grid grid-cols-4 items-center justify-between gap-4">
            <div className="col-span-2 flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {item.image ? <Image src={item.image} width={20} height={20} className="size-5 object-cover rounded-full" alt='domain' /> : <LuGlobe className="size-5 text-stone-400" />}
                <h2 className="text-sm font-medium text-black">{item.url}</h2>
              </div>
              <button className="cursor-pointer px-2.5 py-1 bg-white border border-stone-200 rounded-lg opacity-0 group-hover:opacity-100"><LuPenLine className="size-4 text-stone-500" /></button>
            </div>
            <div className="flex items-center gap-1.5">
              <LuCircle className="text-transparent bg-green-400 rounded-full size-2" />
              <p className="text-sm text-stone-600 font-medium">Bot ready</p>
            </div>
            <div className="flex justify-end">
              <p className="text-sm text-stone-600 font-normal flex items-center">
                {createdAt(item.created_at)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}