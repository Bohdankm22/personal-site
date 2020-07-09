import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Bohdan's world</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          My name is Bohdan and I am a Software Engineer. My hobby is
          travelling. I enjoy improving myself every day and not afaild of
          challenges.
        </p>
      </section>

      <h2>My posts</h2>
      <h3>
        <Link href="posts/getting-to-amazon">
          Getting to Amazon in 6 month for Software Engineers
        </Link>
      </h3>
    </Layout>
  );
}
