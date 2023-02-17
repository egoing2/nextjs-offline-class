import { Layout } from "@/components/Layout";
import Head from "next/head";
import { useRouter } from 'next/router';

export default function Create() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Welcome - Create</title>
      </Head>
      <h2>Create</h2>
      <form onSubmit={evt=>{
        evt.preventDefault();
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        fetch(process.env.NEXT_PUBLIC_API_URL+'topics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title, body}),
        })
          .then(res=>res.json())
          .then(result=>{
            router.push(`/read/${result.id}`);
          })
      }}>
        <p><input type="text" name="title" placeholder="title" autoFocus/></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </>
  )
}
