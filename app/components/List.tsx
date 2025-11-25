import { LuGlobe } from 'react-icons/lu'

type Domain = { id: number; url: string }
interface DomainsListProps { domains: Domain[] }

export const DomainsList = ({ domains }: DomainsListProps) => {
  return (
    domains.map((domain: Domain) => (
      <li key={domain.id} className="ps-4">
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 px-2 py-2">
          <LuGlobe className="size-5 text-neutral-400 group-hover:opacity-0" />
          {domain.url}
        </div>
      </li>
    ))
  )
}
