import { Domains } from "@/utils/type";

export const SingleDomain = async ({ slug }: Domains) =>
  (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/domains/${slug}`, { cache: 'no-store' })
    .then(res => res.json()))
    .url;

export const AllDomains = async (): Promise<Domains[]> =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/domains`, { cache: 'no-store' })
    .then(res => res.json());