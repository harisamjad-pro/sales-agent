import Breadcrumbs from "@/app/components/client/Breadcrumbs";
import { SingleDomain } from "@/app/components/server/Domains";
import Link from "next/link";
import { LuBotMessageSquare, LuCopy, LuLink2, LuPackage, LuSettings, LuTarget } from "react-icons/lu";
import { Domains } from '@/utils/type';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: Props) {
  const { slug } = await params;
  const url = await SingleDomain({ slug } as Domains);
  return (
    <div>
      <Breadcrumbs url={url} />
      {/* <header className="">
        <nav className="px-6 py-4">
          <ul className="flex items-center gap-2">
            <li><Link href={"/"} className="text-sm font-medium flex items-center gap-1.5 px-2 py-1.5 bg-white rounded-full"><LuTarget className="size-5 text-neutral-400" />{"Overview"}</Link></li>
            <li><Link href={"/"} className="text-sm font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg" ><LuBotMessageSquare className="size-5 text-neutral-400" />{"Bot Training"}</Link></li>
            <li><Link href={"/"} className="text-sm font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg" ><LuPackage className="size-5 text-neutral-400" />{"Products"}</Link></li>
            <li><Link href={"/"} className="text-sm font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-lg" ><LuSettings className="size-5 text-neutral-400" />{"Settings"}</Link></li>
          </ul>
        </nav>
      </header> */}
      <div className="px-6 py-4">
        <h1>Manage domain</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Domain</h1>
          <Link href={`//${slug}`} target="_blank" className="text-sm font-medium flex items-center gap-1.5 text-blue-500 hover:text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg px-2 py-1"><LuLink2 className="size-5" />{slug}</Link>
        </div>
        <p className="text-base text-neutral-600">Manage the settings, training data, and products.</p>
        <br />
        <br />
        <h2>Code snippet</h2>
        <p>Copy and paste the following code snippet to integrate in website.</p>
        <button className="cursor-pointer text-sm font-medium flex items-center gap-1.5 text-black bg-neutral-100 hover:bg-neutral-200 rounded-lg px-2 py-1.5"><LuCopy className="size-5 text-neutral-400" />Copy snippet</button>

        <br /><br />

        <pre className="bg-neutral-100 rounded-lg p-0 overflow-x-auto text-sm">
          {`
          <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
              </head>
              <body>
                <div id="sales-agent-chatbot"></div>
                <script src="https://yourdomain.com/integration.js" data-domain="{slug}"></script>
              </body>
            </html>
            `}
        </pre>
      </div>
    </div>
  )
}
