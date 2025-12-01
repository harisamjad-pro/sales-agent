"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { LuChevronRight, LuFileBox, LuGlobe } from 'react-icons/lu';

export default function Breadcrumbs({ url }: { url?: string }) {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1.5 p-2">
      {pathname
        .split('/')
        .filter(Boolean)
        .map((segment, idx, arr) => {
          const href = '/' + arr.slice(0, idx + 1).join('/');
          return (
            <div key={href} className="flex items-center gap-1.5">
              <Link href={href} className="text-sm text-black font-normal flex items-center gap-1.5 px-2 pe-2.5 py-1.5 hover:bg-stone-200 rounded-lg w-fit">
                {idx === 0 ? <LuGlobe className="size-5 text-blue-400" /> : <LuFileBox className="size-5 text-orange-400" />}
                {idx === 0 ? segment.charAt(0).toUpperCase() + segment.slice(1) : url ? url : segment}
              </Link>
              {idx < arr.length - 1 && <span className="text-stone-400"><LuChevronRight className="size-5 text-stone-400" /></span>}
            </div>
          );
        })}
    </nav>
  )
}
