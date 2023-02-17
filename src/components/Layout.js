import Link from 'next/link';
import { useEffect, useState } from 'react';
export function Layout({ children }) {
  const [topics, setTopics] = useState([]);
  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics')
      .then(resp=>resp.json())
      .then(result=>{
        setTopics(result);
      })
  },[])
  return <>
    <header>
      <h1><Link href="/">WEB</Link></h1>
    </header>
    <nav>
      <ol>
        {topics.map(t=>
          <li key={t.id}>
            <Link href={`/read/${t.id}`}>{t.title}</Link>
          </li>  
        )}
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
