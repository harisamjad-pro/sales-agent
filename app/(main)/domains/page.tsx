
import Breadcrumbs from '@/app/components/client/Breadcrumbs';
import { AllDomains } from '@/app/components/server/Domains';
import Link from 'next/link'
import { Suspense } from 'react';
import { LuGlobe } from 'react-icons/lu'
import { Btn } from '@/app/components/button';
import { createdAt } from '@/utils/createdAt';
import { Domains } from '@/utils/type';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="space-y-4 px-16 py-4">
        <div>
          <h1 className="text-2xl font-semibold">Manage Domains</h1>
          <p className="text-stone-600 font-normal text-base">Manage settings, training data, and products for your domain.</p>
        </div>
        <div className="grid grid-cols-4 gap-4 px-12 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"></div>
        <Btn />
        <Suspense fallback={<div>Loading domains...</div>}>
          <D />
        </Suspense>
      </div>
    </>
  )
}

// Server Component Part
const D = async () => {
  return <List data={await AllDomains()} />
}

// UI Skeleton (cLIENT)
const List = ({ data }: { data: Array<Domains> }) => {
  return (
    data.map((domain: Domains) => (
      <Link key={domain.id} href={`/domains/${domain.slug}`} className="border border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50 rounded-lg p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image src="https://images.unsplash.com/photo-1545231027-637d2f6210f8" width={96} height={96} className="size-24 object-cover" alt='domain' />
          <h2 className="text-lg font-medium">{domain.url}</h2>
        </div>
        <p className="text-sm text-stone-600">{createdAt(domain.created_at)}</p>
      </Link>
    ))
  )
}