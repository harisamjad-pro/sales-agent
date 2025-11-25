import React from 'react'
import { Sidebar } from '../components/Sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex items-start">
      <Sidebar />
      <div className="w-full">
        {children}
      </div>
    </main>
  )
}
