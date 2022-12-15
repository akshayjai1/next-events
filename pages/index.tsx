import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>

        <header className={styles.description}>
          <nav>
            <img alt="dummy-image" />
            <Link href="/">Home</Link>
            {/* <a href="/"> Home</a> */}
            <a href="/events"> Events</a>
            <a href="/about-us"> About us</a>
          </nav>
        </header>

        <div className={styles.grid}>
          <span className={styles.card}>
            <h2>Events in Mumbai</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
              corrupti error sint ipsam est deleniti voluptatem id praesentium,
              nihil, aliquid ea accusamus! Pariatur corrupti reprehenderit
              cumque provident tenetur necessitatibus!
            </p>
          </span>

          <span className={styles.card}>
            <h2>Events in Banglore</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
              corrupti error sint ipsam est deleniti voluptatem id praesentium,
              nihil, aliquid ea accusamus! Pariatur corrupti reprehenderit
              cumque provident tenetur necessitatibus!
            </p>
          </span>

          <span className={styles.card}>
            <h2>Events in Pune</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
              corrupti error sint ipsam est deleniti voluptatem id praesentium,
              nihil, aliquid ea accusamus! Pariatur corrupti reprehenderit
              cumque provident tenetur necessitatibus!
            </p>
          </span>

          <span className={styles.card}>
            <h2>Events in Nagpur</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui
              corrupti error sint ipsam est deleniti voluptatem id praesentium,
              nihil, aliquid ea accusamus! Pariatur corrupti reprehenderit
              cumque provident tenetur necessitatibus!
            </p>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          Next Event copyright{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </span>
      </footer>
    </div>
  );
}
