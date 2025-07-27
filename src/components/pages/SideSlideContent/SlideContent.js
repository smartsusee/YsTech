import { useState, useEffect } from 'react';

const SliderWithContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample data for slides
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'First Slide',
      description: 'This is the description for the first slide. It can be as long as you need.'
    },
    {
      image: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
      title: 'Second Slide',
      description: 'Description for the second slide goes here. Tailwind makes styling easy.'
    },
    {
      image: 'https://images.unsplash.com/photo-1753121354334-18bf331648e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Third Slide',
      description: 'The third slide content. React makes building UIs simple and efficient.'
    }
  ];

  // Auto slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col md:flex-row h-[500px]">
      {/* Left side content - takes remaining space */}
      <div className="w-full md:w-[calc(100%-250px)] bg-gray-100 p-8 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            {slides[currentSlide].title}
          </h2>
          <p className="text-base text-gray-600 mb-6 line-clamp-3">
            {slides[currentSlide].description}
          </p>
          
          {/* Navigation dots */}
          <div className="flex space-x-2 mb-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex space-x-3">
            <button 
              onClick={goToPrev}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
            >
              Previous
            </button>
            <button 
              onClick={goToNext}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      {/* Right side slider - fixed 600px */}
      <div className="w-full md:w-[600px] h-[500px] relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Arrow navigation for mobile */}
        <div className="md:hidden absolute top-1/2 w-full flex justify-between px-4">
          <button 
            onClick={goToPrev}
            className="bg-black bg-opacity-50 text-white p-1 rounded-full"
          >
            &lt;
          </button>
          <button 
            onClick={goToNext}
            className="bg-black bg-opacity-50 text-white p-1 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderWithContent;