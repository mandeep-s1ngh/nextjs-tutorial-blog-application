import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function SecondPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Lorem Two</title>
        </Head>
        <article>
          <h1>
            Reprehenderit mollit minim duis et laborum minim do culpa occaecat
            ex.
          </h1>
          <div className={utilStyles.lightText}>
            <small>5 years ago</small>
          </div>
          <p>
            Voluptate fugiat reprehenderit nisi mollit amet officia et.
            Exercitation ullamco velit enim qui minim id cillum irure laborum in
            duis qui. Esse commodo do in eu commodo id. Consequat nulla officia
            aliquip nisi ex mollit deserunt nulla ea consequat duis. Dolore esse
            aliquip et laboris consectetur non elit in ex voluptate. Irure qui
            sint excepteur nulla. Duis pariatur anim Lorem nulla sint proident
            elit. Non tempor quis aute sunt commodo aliqua ullamco aliquip.
            Officia consequat eu do cillum. Anim aliquip Lorem cillum id nisi.
          </p>
        </article>
      </Layout>
    </>
  );
}
