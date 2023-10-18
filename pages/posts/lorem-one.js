import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>Lorem One</title>
        </Head>
        <article>
          <h1>Fugiat et consequat mollit ipsum.</h1>
          <div className={utilStyles.lightText}>
            <small>4 years ago</small>
          </div>
          <p>
            Qui voluptate adipisicing consectetur labore enim non eiusmod et
            quis. Id Lorem cillum duis labore occaecat. Adipisicing sit pariatur
            velit tempor et magna. Id adipisicing anim dolore pariatur
            exercitation. Est amet culpa labore velit duis minim. Labore laborum
            ullamco ad irure eu excepteur duis anim sunt commodo ut enim culpa.
            Exercitation dolore velit culpa sunt ipsum ullamco. Ex adipisicing
            magna aliquip velit sint. Pariatur non laborum aute ullamco magna do
            mollit sit non proident exercitation veniam et eu. Fugiat laboris
            sit sint ullamco pariatur aute tempor ut incididunt voluptate eu
            adipisicing deserunt. Culpa esse deserunt ex exercitation deserunt
            dolore nulla do ut pariatur. Ex excepteur nulla occaecat adipisicing
            enim ut proident sint nostrud laboris mollit. Eiusmod commodo irure
            enim nisi officia duis deserunt veniam excepteur sit ad sit.
            Proident duis labore cillum elit ullamco consectetur commodo ullamco
            nulla sit magna.
          </p>
        </article>
      </Layout>
    </>
  );
}
