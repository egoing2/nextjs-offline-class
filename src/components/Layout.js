import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export function Layout({ children }) {
  const router = useRouter();
  const [topics, setTopics] = useState([]);
  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics')
      .then(resp=>resp.json())
      .then(result=>{
        setTopics(result);
      })
  },[router.query.id])
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
      {router.query.id ? <>
        <li><Link href={`/update/${router.query.id}`}>Update</Link></li>
        <li><button onClick={()=>{
          fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+router.query.id, {
            method: 'DELETE',
          })
            .then(res=>res.json())
            .then(result=>{
              router.push(`/`);
            })
        }}>Delete</button></li>
      </>: null}
    </ul>
  </>;
}
