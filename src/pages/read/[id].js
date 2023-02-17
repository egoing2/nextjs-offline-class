import Head from "next/head";

export default function Read() {
  return (
    <>
      <Head>
        <title>Welcome - read</title>
      </Head>
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
        </ol>
      </nav>
      <article>
        <h2>Read</h2>
        Hello, Read
      </article>
      <ul>
        <li><a href="/create">Create</a></li>
        <li><a href="/update">Update</a></li>
        <li><a href="/delete">Delete</a></li>
      </ul>
    </>
  )
}
