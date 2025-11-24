import Link from "next/link";

export default async function Domains() {
  const domains = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/domains`, { cache: 'no-store' }).then(res => res.json());
  return (
    <ul>
      {domains.map((domain: { id: number; url: string; slug: string }) => (
        <li key={domain.id}>
          <Link href={`domain/${domain.slug}`}>{domain.url}</Link>
        </li>
      ))}
    </ul>
  )
}