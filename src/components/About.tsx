
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white opacity-0 will-change-opacity"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-boutique-black mb-8">
            Our Boutique
          </h2>
          <div className="w-20 h-0.5 bg-boutique-black mx-auto mb-8 opacity-20"></div>
          <p className="text-boutique-black opacity-80 mb-6 leading-relaxed">
            Founded in 2018, Atelier was born from a passion for timeless designs and exceptional craftsmanship. 
            We specialize in curating elevated essentials that transcend trends and seasons, focusing on quality 
            materials and ethical production.
          </p>
          <p className="text-boutique-black opacity-80 leading-relaxed">
            Each piece in our collection is thoughtfully selected to ensure versatility and longevity in your 
            wardrobe. We believe in conscious consumption and creating garments that you'll cherish for years 
            to come. Our commitment to sustainable practices extends from our choice of fabrics to our local 
            production partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
