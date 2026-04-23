import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className={styles.bottomRow}>
      </div>
    </Layout>
  );
}
