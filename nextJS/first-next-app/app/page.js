import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <p>let's get started!</p>

      <p><Link href="/about">About</Link></p>

    </main>
  )
}