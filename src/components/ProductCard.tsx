
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  whatsappLink: string;
}

const ProductCard = ({ image, name, price, category, whatsappLink }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const message = encodeURIComponent(`Hello, I'm interested in the "${name}" (${price}). Can you provide more information?`);
  const fullWhatsappLink = `${whatsappLink}?text=${message}`;
  
  return (
    <div 
      className="group product-hover bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-[400px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href={fullWhatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-boutique-black text-sm px-4 py-2 flex items-center gap-2 hover:bg-boutique-black hover:text-white transition-colors duration-300"
          >
            Ask About This Item
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">{category}</div>
        <h3 className="font-playfair text-lg font-medium">{name}</h3>
        <p className="mt-1 text-boutique-black">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
