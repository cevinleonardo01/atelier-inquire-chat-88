
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-boutique-beige hero-clip flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601379579964-746fe9677dd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-16 md:py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-medium text-boutique-black mb-6 animate-fade-in">
            Refined Elegance for the Modern Woman
          </h1>
          <p className="text-boutique-black text-lg md:text-xl mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover our curated collection of timeless pieces designed for everyday luxury and effortless style.
          </p>
          <Button
            className="bg-boutique-black text-white hover:bg-black rounded-none py-6 px-8 text-base animate-fade-in"
            style={{ animationDelay: "0.4s" }}
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Browse Our Collection
          </Button>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-boutique-black opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
