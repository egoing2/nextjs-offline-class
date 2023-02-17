import { Layout } from "@/components/Layout";
import Head from "next/head";

export default function Read() {
  return (
    <>
      <Head>
        <title>Welcome - read</title>
      </Head>
      <Layout>
        <h2>Read</h2>
        Hello, Read
      </Layout>
    </>
  )
}
