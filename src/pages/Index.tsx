
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Collection from '@/components/Collection';
import NewArrivals from '@/components/NewArrivals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Collection />
      <NewArrivals />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
