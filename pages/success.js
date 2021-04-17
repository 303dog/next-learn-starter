import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Success() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.card}>
        <div className={utilStyles.code}>Form successfully submitted!</div>
        <h2 className={utilStyles.code}>We will be in contact soon</h2>
      </section>
    </Layout>
  );
}
