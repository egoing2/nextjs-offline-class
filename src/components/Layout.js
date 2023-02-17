import Link from 'next/link';
export function Layout({ children }) {
  return <>
    <header>
      <h1><Link href="/">WEB</Link></h1>
    </header>
    <nav>
      <ol>
        <li><Link href="/read/1">html</Link></li>
        <li><Link href="/read/2">css</Link></li>
      </ol>
    </nav>
    <article>
      {children}
    </article>
    <ul>
      <li><Link href="/create">Create</Link></li>
      <li><Link href="/update">Update</Link></li>
      <li><Link href="/delete">Delete</Link></li>
    </ul>
  </>;
}
