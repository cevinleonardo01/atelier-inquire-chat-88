
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const NewArrivals = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate-fade-in');
          sectionRef.current?.classList.remove('opacity-0');
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
  
  // WhatsApp link - replace with your number
  const whatsappLink = "https://wa.me/1234567890";
  const message = encodeURIComponent("Hello, I'm interested in your new arrivals collection. Can you provide more information?");
  const fullWhatsappLink = `${whatsappLink}?text=${message}`;
  
  return (
    <section 
      id="new-arrivals" 
      ref={sectionRef}
      className="py-20 bg-white opacity-0 will-change-opacity"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-boutique-black mb-8">
            Spring/Summer 2025
          </h2>
          <div className="w-20 h-0.5 bg-boutique-black mx-auto mb-8 opacity-20"></div>
          <p className="text-boutique-black opacity-80 max-w-2xl mx-auto">
            Our latest collection celebrates the warmth of the season with lightweight fabrics, 
            relaxed silhouettes, and a fresh color palette inspired by nature.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img 
              src="https://images.unsplash.com/photo-1583744946564-b52d01a7b54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="New collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="New collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1637160095448-870f47205305?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="New collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1553210306-d0010ab910a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="New collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="New collection" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={fullWhatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-boutique-black text-white hover:bg-black rounded-none py-6 px-8 text-base"
            >
              Inquire About New Arrivals
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
