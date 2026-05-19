import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css';
import Projects from '../components/Projects/Projects';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
}
