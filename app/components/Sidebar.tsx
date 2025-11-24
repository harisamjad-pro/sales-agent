// import Link from 'next/link'
// import React, { Suspense } from 'react'
// import Domains from './Domains'
// import { LuChevronRight, LuGlobe, LuLayoutGrid, LuMail, LuMessageSquareMore, LuSearch, LuSettings } from 'react-icons/lu'
// import { ButtonAddDomain, ButtonShowDomain } from './button'

// export const Sidebar = () => {
//   return (
//     <aside className="w-64 border-r-2 px-2 py-12 h-screen sticky top-0 bg-white border-neutral-100">
//       <nav>
//         <ul className="space-y-6">
//           <li className="space-y-2">
//             <p className="px-2 text-neutral-400 font-medium text-sm">Menu</p>
//             <ul>
//               <li><Link href="/search" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
//                 <LuSearch className="size-5 text-neutral-400" />
//                 Search
//               </Link></li>
//               <li><Link href="/dashboard" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-neutral-100 text-black px-2 py-2">
//                 <LuLayoutGrid className="size-5 text-neutral-400" />
//                 Dashboard
//               </Link></li>
//               <li><Link href="/chats" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
//                 <LuMessageSquareMore className="size-5 text-neutral-400" />
//                 Chats
//               </Link></li>
//               <li><Link href="/emails" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
//                 <LuMail className="size-5 text-neutral-400" />
//                 Emails
//               </Link></li>
//               <li><Link href="/settings" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
//                 <LuSettings className="size-5 text-neutral-400" />
//                 Settings
//               </Link></li>
//             </ul>
//           </li>

//           <li className="space-y-2">
//             <p className="px-2 text-neutral-400 font-medium text-sm">Operate</p>
//             <ul>
//               <li className="relative flex items-center group bg-transparent hover:bg-neutral-100 rounded-lg">
//                 <ButtonShowDomain />
//                 <Link href="/domains" className="group w-full rounded-lg flex items-center justify-between gap-2 text-sm font-medium text-neutral-600 px-2 py-2">
//                   <div className="flex items-center gap-2">
//                     <LuGlobe className="size-5 text-neutral-400 group-hover:opacity-0" />
//                     Domains
//                   </div>
//                 </Link>
//                 <ButtonAddDomain />
//               </li>
//             </ul>
//           </li>
//         </ul>
//         <Suspense fallback={<div>Loading domains...</div>}>
//           <Domains />
//         </Suspense>
//       </nav>
//     </aside>
//   )
// }




'use client';

import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import Domains from './Domains'
import { 
  LuChevronRight, LuGlobe,
  LuLayoutGrid, LuMail, LuMessageSquareMore,
  LuSearch, LuSettings 
} from 'react-icons/lu'
import { ButtonAddDomain } from './button'

export const Sidebar = () => {
  const [showDomains, setShowDomains] = useState(false);

  return (
    <aside className="w-64 border-r-2 px-2 py-12 h-screen sticky top-0 bg-white border-neutral-100">
      <nav>
        <ul className="space-y-6">

          {/* MENU */}
          <li className="space-y-2">
            <p className="px-2 text-neutral-400 font-medium text-sm">Menu</p>
            <ul>
              <li>
                <Link href="/search" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
                  <LuSearch className="size-5 text-neutral-400" />
                  Search
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-neutral-100 text-black px-2 py-2">
                  <LuLayoutGrid className="size-5 text-neutral-400" />
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/chats" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
                  <LuMessageSquareMore className="size-5 text-neutral-400" />
                  Chats
                </Link>
              </li>

              <li>
                <Link href="/emails" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
                  <LuMail className="size-5 text-neutral-400" />
                  Emails
                </Link>
              </li>

              <li>
                <Link href="/settings" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
                  <LuSettings className="size-5 text-neutral-400" />
                  Settings
                </Link>
              </li>
            </ul>
          </li>

          {/* OPERATE */}
          <li className="space-y-2">
            <p className="px-2 text-neutral-400 font-medium text-sm">Operate</p>

            <ul>
              <li className="relative flex items-center group bg-transparent hover:bg-neutral-100 rounded-lg">

                {/* Toggle domain list */}
                <button
                  onClick={() => setShowDomains(!showDomains)}
                  className="bg-transparent hover:bg-neutral-200 rounded-sm p-0.5 absolute left-2 cursor-pointer z-10 opacity-0 group-hover:opacity-100"
                >
                  <LuChevronRight
                    className={`size-4 text-neutral-400 transition-transform ${showDomains ? 'rotate-90' : ''}`}
                  />
                </button>

                <Link href="/domains" className="group w-full rounded-lg flex items-center justify-between gap-2 text-sm font-medium text-neutral-600 px-2 py-2">
                  <div className="flex items-center gap-2">
                    <LuGlobe className="size-5 text-neutral-400 group-hover:opacity-0" />
                    Domains
                  </div>
                </Link>

                <ButtonAddDomain />
              </li>
            </ul>
          </li>
        </ul>

        {/* Conditional render */}
        {showDomains && (
          <div className="mt-4 pl-2">
            <Suspense fallback={<div>Loading domains...</div>}>
              <Domains />
            </Suspense>
          </div>
        )}

      </nav>
    </aside>
  )
}
