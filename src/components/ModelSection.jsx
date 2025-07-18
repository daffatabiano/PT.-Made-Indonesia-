import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { homes } from '../utils/constants';

const ModelSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="portfolio" className="px-6 py-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h3 className="text-3xl font-semibold text-black">Upgrade Your Model.</h3>
        <p className="text-gray-500 max-w-xl text-base">
          Enhance your model with pre-designed add-ons like the Base Deck and the Base Deck+.
          Additional items are also available through key partnerships.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {homes.map((home, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[500px] bg-white shadow-md group overflow-hidden"
            >
              <img
                src={home.image}
                alt={home.name}
                className="w-full max-h-62 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{home.location}</p>
                <h4 className="text-xl font-semibold mb-2">{home.name}</h4>
                <div className='flex sm:flex-row flex-col justify-between items-center'>
                  <div className='w-full'>
                    <p className="text-sm mb-1">{home.bedrooms}</p> 
                    <p className="text-sm text-gray-500 mb-3">{home.price}</p>
                  </div>
                  <p className="text-sm text-gray-600">{home.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
        <div className="sm:justify-center justify-end items-center flex gap-3 mt-4">
          <button
            onClick={() => scroll('left')}
            className="p-1 rounded-full sm:rounded-lg border text-gray-600 hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1 rounded-full sm:rounded-lg border text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>
    </section>
  );
};

export default ModelSection;
