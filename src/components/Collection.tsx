
import { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
}

// const Collection = () => {
//   const sectionRef = useRef<HTMLElement>(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           sectionRef.current?.classList.add('animate-fade-in');
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);
  
  // WhatsApp link - replace with your number
  const whatsappLink = "https://wa.me/1234567890";
  
  const products: Product[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Linen Blend Midi Dress",
      price: "$189",
      category: "Dresses"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Oversized Wool Blazer",
      price: "$245",
      category: "Outerwear"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Silk Camisole",
      price: "$120",
      category: "Tops"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Wide-Leg Cotton Trousers",
      price: "$165",
      category: "Bottoms"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Cashmere Knit Cardigan",
      price: "$220",
      category: "Knitwear"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556015048-4d3aa10df74c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Leather Crossbody Bag",
      price: "$195",
      category: "Accessories"
    }
  ];
  
  return (
    <section 
      id="collection" 
      ref={sectionRef}
      className="py-20 bg-boutique-beige"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-boutique-black mb-8">
            Our Collection
          </h2>
          <div className="w-20 h-0.5 bg-boutique-black mx-auto mb-8 opacity-20"></div>
          <p className="text-boutique-black opacity-80 max-w-2xl mx-auto">
            Explore our carefully curated collection of timeless pieces designed to elevate 
            your everyday wardrobe with elegance and sophistication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              whatsappLink={whatsappLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
