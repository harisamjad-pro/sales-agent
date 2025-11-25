// 'use client';

import Link from "next/link";
import { LuChevronsLeft, LuGlobe, LuLayoutGrid, LuLogOut, LuMail, LuMessageSquareMore, LuSearch, LuSettings, LuTrash2 } from "react-icons/lu";

// import Link from 'next/link'
// import { useState } from 'react'
// import { LuChevronRight, LuGlobe, LuLayoutGrid, LuMail, LuMessageSquareMore, LuSearch, LuSettings, LuTrash2 } from 'react-icons/lu'
// import { ButtonAddDomain } from './button'
// import useDomains from '../../hooks/useDomains';

// export const Sidebar = () => {
//   const [showDomains, setShowDomains] = useState(false);
//   const { domains, refresh } = useDomains();

//   return (
//     <aside className="w-64 border-r-2 px-2 py-6 h-screen sticky top-0 bg-white border-neutral-100">
//       <nav>
//         <ul className="space-y-6">
//           <li className="space-y-1">
//             <p className="px-2 text-neutral-400 font-medium text-sm">Menu</p>
//             <ul>
//               <li><Link href="/search" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
//                 <LuSearch className="size-5 text-neutral-400" />
//                 Search
//               </Link></li>

//               <li><Link href="/dashboard" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-neutral-100 text-black px-2 py-2">
//                 <LuLayoutGrid className="size-5 text-black" />
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

//               <li><Link href="/settings" className="rounded-lg flex items-center gap-2 text-sm font-medium bg-transparent text-neutral-600 px-2 py-2">
//                 <LuTrash2 className="size-5 text-neutral-400" />
//                 Trash
//               </Link></li>
//             </ul>
//           </li>

//           {/* OPERATE */}
//           <li className="space-y-1">
//             <p className="px-2 text-neutral-400 font-medium text-sm">Operate</p>

//             <ul>
//               <li className="relative flex items-center group bg-transparent hover:bg-neutral-100 rounded-lg">
//                 <button
//                   onClick={() => setShowDomains(!showDomains)}
//                   className="bg-transparent hover:bg-neutral-200 rounded-sm p-0.5 absolute left-2 cursor-pointer z-10 opacity-0 group-hover:opacity-100"
//                 >
//                   <LuChevronRight className={`size-4 text-neutral-400 transition-transform ${showDomains ? 'rotate-90' : ''}`} />
//                 </button>

//                 <Link href="/domains" className="group w-full rounded-lg flex items-center justify-between gap-2 text-sm font-medium text-neutral-600 px-2 py-2">
//                   <div className="flex items-center gap-2">
//                     <LuGlobe className="size-5 text-neutral-400 group-hover:opacity-0" />
//                     Domains
//                   </div>
//                 </Link>

//                 <ButtonAddDomain onAdded={refresh} />
//               </li>
//             </ul>
//           </li>
//         </ul>

//         {/* Conditional render */}
//         {showDomains && (
//           <ul>
//             {domains.map((domain: { id: number, url: string }, i) => (
//               <li key={i} className="ps-4">
//                 <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 px-2 py-2">
//                   <LuGlobe className="size-5 text-neutral-400 group-hover:opacity-0" />
//                   {domain.url}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </aside>
//   )
// }




export function Sidebar() {
  return (
    <aside className="w-80 border-r-2 border-neutral-100 min-h-dvh">
      <nav className="px-2 py-4">
        <ul>
          <li><LuChevronsLeft className="size-5 text-neutral-400" /></li>
          <li><button className="cursor-pointer text-sm text-neutral-600 font-medium flex items-center gap-1.5 px-2 py-1.5"><LuSearch className="size-5 text-neutral-400" />{"Search"}</button></li>
          <li><Link href={"/dashboard"} className="text-sm font-medium flex items-center gap-1.5 px-2 py-1.5 bg-neutral-100 rounded-lg"><LuLayoutGrid className="size-5 text-neutral-400" />{"Dashboard"}</Link></li>
          <li><Link href={"/chats"} className="text-sm text-neutral-600 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg"><LuMessageSquareMore className="size-5 text-neutral-400" />{"Chats"}</Link></li>
          <li><Link href={"/marketing"} className="text-sm text-neutral-600 font-medium flex items-center gap-1.5 px-2 py-1 rounded-lg"><LuMail className="size-5 text-neutral-400" />{"Marketing"}</Link></li>
          <li><Link href={"/domains"} className="text-sm text-neutral-600 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg"><LuGlobe className="size-5 text-neutral-400" />{"Domains"}</Link></li>
          <li><Link href={"/settings"} className="text-sm text-neutral-600 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg"><LuSettings className="size-5 text-neutral-400" />{"Settings"}</Link></li>
          <li><Link href={"/trash"} className="text-sm text-neutral-600 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg"><LuTrash2 className="size-5 text-neutral-400" />{"Trash"}</Link></li>
          <li><Link href={"#"} className="text-sm text-neutral-600 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg"><LuLogOut className="size-5 text-neutral-400" />{"Logout"}</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
