import { Layout } from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
export async function getServerSideProps(context){
  const resp = await fetch('http://localhost:9999/topics/'+context.query.id);
  const topic = await resp.json();
  return {
    props: {
      topic
    }
  }
}
export default function Read({topic}) {
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
