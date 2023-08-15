import Link from "next/link";

export default function Home() {
  return (
   <section>
    Nextjs Prisma Rest API With Neon PostgreSQL. <br />
    By <Link href={"https://mikhacavin.com"}>Mikha Cavin</Link> <br />
    visit : <Link href={'/api/blogs'} className="button" rel="noopener noreferrer" target="_blank">API</Link>
   </section>
  )
}
