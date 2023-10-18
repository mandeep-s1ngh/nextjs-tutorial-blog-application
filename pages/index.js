import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { format } from "date-fns";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Mandeep Singh and I am getting my first experience
          with the Next.js framework following their official tutorial which
          creates this blog application. The tutorial covered a variety of
          topics including navigating between pages, fetching data, and finally,
          deploying the app to production using Vercel.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <Link href={`/posts/lorem-one`}>
          Occaecat nisi exercitation mollit commodo.
        </Link>
        <br />
        <Link href={`/posts/lorem-two`}>
          Est in eu eiusmod cillum velit ullamco mollit commodo.
        </Link>
      </section>
    </Layout>
  );
}
