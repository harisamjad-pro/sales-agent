import { AllDomains } from "./Domains"
import Link from "next/link"
import { LuGlobe } from "react-icons/lu"
import { createdAt } from "@/utils/createdAt"
import Image from "next/image"
import { Domains } from "@/utils/type"

export const D = async () => {
  return <List data={await AllDomains()} />
}

const List = ({ data }: { data: Array<Domains> }) => {
  return (
    data.map((domain: Domains) => (
      <Link key={domain.id} href={`/domains/${domain.slug}`} className="border border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50 rounded-lg p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image src={"https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={10} height={10} alt='domain' />
          <h2 className="text-lg font-medium">{domain.url}</h2>
        </div>
        <p className="text-sm text-stone-600">{createdAt(domain.created_at)}</p>
      </Link>
    ))
  )
}