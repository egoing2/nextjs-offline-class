import Head from "next/head";

export default function Create() {
  return (
    <>
      <Head>
        <title>Welcome - Create</title>
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
        <h2>Create</h2>
        Hello, Create
      </article>
      <ul>
        <li><a href="/create">Create</a></li>
        <li><a href="/update">Update</a></li>
        <li><a href="/delete">Delete</a></li>
      </ul>
    </>
  )
}