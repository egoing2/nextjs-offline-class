export function Layout({ children }) {
  return <>
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
      {children}
    </article>
    <ul>
      <li><a href="/create">Create</a></li>
      <li><a href="/update">Update</a></li>
      <li><a href="/delete">Delete</a></li>
    </ul>
  </>;
}
