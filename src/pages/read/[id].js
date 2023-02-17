import { Layout } from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function Read() {
  const router = useRouter();
  const [topic, setTopic] = useState(null);
  useEffect(()=>{
    if(router.query.id){
      fetch('http://localhost:9999/topics/'+router.query.id)
        .then(resp=>resp.json())
        .then(result=>{
          setTopic(result);
        })
    }
  },[router.query.id])
  if(router.query.id===undefined || topic === null) {
    return <>Loading....</>
  }
  return (
    <>
      <Head>
        <title>Welcome - {topic.title}</title>
      </Head>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  )
}
