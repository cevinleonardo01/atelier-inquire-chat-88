
import { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, MessageSquare, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
    
    // Ensure section is visible even if intersection observer fails
    const timeout = setTimeout(() => {
      if (sectionRef.current?.classList.contains('opacity-0')) {
        sectionRef.current.classList.remove('opacity-0');
      }
    }, 1000);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearTimeout(timeout);
    };
  }, []);
  
  // WhatsApp link - replace with your number
  const whatsappLink = "https://wa.me/1234567890";
  const message = encodeURIComponent("Hello, I would like to inquire about your products.");
  const fullWhatsappLink = `${whatsappLink}?text=${message}`;
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-boutique-blush opacity-0 will-change-opacity"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-boutique-black mb-8">
            Visit & Connect
          </h2>
          <div className="w-20 h-0.5 bg-boutique-black mx-auto mb-8 opacity-20"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 mb-8">
              <h3 className="font-playfair text-2xl mb-6">Our Boutique</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium">123 Fashion Street</p>
                    <p className="text-gray-600">Soho, New York, NY 10012</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 10am - 7pm</p>
                    <p className="text-gray-600">Sunday: 12pm - 5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (212) 555-1234</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-playfair text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-boutique-black transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-boutique-black transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href={fullWhatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-boutique-black text-white hover:bg-black rounded-none py-6 px-8 text-base flex items-center gap-2"
                >
                  <MessageSquare size={18} />
                  Order via WhatsApp
                </Button>
              </a>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-full relative bg-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7546721366266!2d-74.00347492411567!3d40.723583971360835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c5548175d%3A0x5dd8af15d5e8e057!2sSoHo%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1659567267684!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Boutique Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
