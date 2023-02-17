import { Layout } from "@/components/Layout";
import Head from "next/head";
import { useRouter } from 'next/router';
import {useState} from 'react';
export async function getServerSideProps(context){
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+context.query.id);
  const topic = await resp.json();
  return {
    props: {
      topic
    }
  }
}
export default function Create({topic}) {
  const router = useRouter();
  const [title, setTitle] = useState(topic.title);
  const [body, setBody] = useState(topic.body);
  return (
    <>
      <Head>
        <title>Update</title>
      </Head>
      <h2>Update</h2>
      <form onSubmit={evt=>{
        evt.preventDefault();
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+topic.id, {
          method: 'PATCH',
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
        <p><input type="text" name="title" placeholder="title" autoFocus value={title} onChange={evt=>{
          setTitle(evt.target.value);
        }}/></p>
        <p><textarea name="body" placeholder="body" value={body} onChange={evt=>{
          setBody(evt.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </>
  )
}
