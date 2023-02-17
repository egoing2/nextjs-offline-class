import Head from "next/head";
import { Layout } from "../components/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome - web!</title>
      </Head>
      <Layout>
        <h2>Welcome</h2>
        Hello, WEB
      </Layout>
    </>
  )
}
