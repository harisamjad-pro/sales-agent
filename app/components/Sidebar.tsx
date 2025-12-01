'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuChevronsLeft, LuDollarSign, LuGlobe, LuLayoutGrid, LuLogOut, LuMail, LuMessageSquareMore, LuSearch, LuSettings, LuTrash2 } from "react-icons/lu";

type SidebarNavLinkProp = {
  title: string;
  href: string;
  icon: React.ReactNode;
}

type SidebarNavButtonProp = {
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const SidebarNavLinkData = [
  { title: "Dashboard", href: "/dashboard", icon: <LuLayoutGrid className="size-5 text-stone-400" /> },
  { title: "Chats", href: "/chats", icon: <LuMessageSquareMore className="size-5 text-stone-400" /> },
  { title: "Marketing", href: "/emails", icon: <LuMail className="size-5 text-stone-400" /> },
  { title: "Domains", href: "/domains", icon: <LuGlobe className="size-5 text-stone-400" /> },
  { title: "Settings", href: "/settings", icon: <LuSettings className="size-5 text-stone-400" /> },
];

// Move components out of render to avoid creating them during render
function SidebarNavLinkComponent({ title, href, icon, pathname }: SidebarNavLinkProp & { pathname: string | null }) {
  return (
    <Link href={href} className={`text-sm font-medium flex items-center gap-1.5 px-2 pe-2.5 py-1.5 ${pathname === href ? "bg-stone-200 hover:bg-stone-200 text-black" : "text-stone-600"} hover:bg-stone-100 rounded-lg`}>
      {icon}{title}
    </Link>
  )
}

function SidebarNavButtonComponent({ title, onClick, icon }: SidebarNavButtonProp) {
  return (
    <button onClick={onClick} className={`cursor-pointer w-full text-sm font-medium flex items-center gap-1.5 px-2 pe-2.5 py-1.5 text-stone-600 hover:bg-stone-200 rounded-lg`}>
      {icon}{title}
    </button>
  )
}

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-72 border-r border-stone-200 bg-stone-50 min-h-dvh">
      <nav className="px-2 py-2">
        <ul>
          {/* {pathname} */}
          <li>
            <div className="flex items-center justify-between px-2 py-1.5">
              <LuDollarSign className="size-5 text-black" />
              <LuChevronsLeft className="size-5 text-stone-400" />
            </div>
          </li>

          <li>
            <SidebarNavButtonComponent
              title="Search"
              onClick={() => alert("Search")}
              icon={<LuSearch className="size-5 text-stone-400" />}
            />
          </li>

          <li>
            {SidebarNavLinkData.map((nav) => <SidebarNavLinkComponent key={nav.title} title={nav.title} href={nav.href} icon={nav.icon} pathname={pathname} />)}
          </li>

          <li><Link href={"/trash"} className="text-sm text-stone-600 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg"><LuTrash2 className="size-5 text-stone-400" />{"Trash"}</Link></li>
          <li><Link href={"#"} className="text-sm text-stone-600 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg"><LuLogOut className="size-5 text-stone-400" />{"Logout"}</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
