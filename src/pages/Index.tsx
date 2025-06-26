
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Order from '@/components/Order';
import Reviews from '@/components/Reviews';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Order />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
