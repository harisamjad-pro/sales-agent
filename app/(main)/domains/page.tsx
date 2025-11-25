import Link from 'next/link'

export default function page() {
  return (
    <div>
      <div>
        <h1>Manage Domains</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptate expedita animi adipisci omnis provident excepturi eligendi incidunt aspernatur quia natus deserunt dolore id, obcaecati blanditiis optio nisi molestias deleniti.</p>
      </div>
      <Link href={"/domains/test"}>Check</Link>
    </div>
  )
}
