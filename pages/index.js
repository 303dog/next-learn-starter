import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>irononcarpetlabels.com</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome</p>
        <Link href="posts/requestForm">
          <a>Click here is you have a custom request</a>
        </Link>
        <p>
          Thanks for checking out my portfolio!{' '}
          <Link href="/contact">
          <a>REQUEST w/Netfly</a>
        </Link>
        </p>
        <p>
          Connect with me through these links:{' '}<br></br>
          <a href="https://google.com">Or Search Google</a>.)
        </p>
      </section>
    </Layout>
  )
}