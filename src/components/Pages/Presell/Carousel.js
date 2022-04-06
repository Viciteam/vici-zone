import { useState, useContext, useEffect } from 'react';
let count = 0;
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredImages = [
        'Frame 2743.png',
        'Frame 2744.png',
        'Frame 2745.png',
        'Frame 2746.png',
        'Frame 2747.png',
        'Frame 2748.png',
        'Frame 2749.png',
        'Frame 2750.png',
        'Frame 2751.png',
        'Frame 2760.png',
        'Frame 2752.png',
        'Frame 2753.png',
        'Frame 2754.png',
        'Frame 2755.png',
        'Frame 2756.png',
        'Frame 2757.png',
        'Frame 2758.png',
        'Frame 2759.png',
    ];

    const handleOnNextClick = () => {
        count = (count + 1) % featuredImages.length;
        setCurrentIndex(count);
    };

    const handleOnPrevClick = () => {
        const productsLength = featuredImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
    };

    useEffect(() => {
        startSlider();
      }, []);
    
      const startSlider = () => {
        setInterval(() => {
          handleOnNextClick();
        }, 5000);
    };

    return ( 
        <div className="max-w-screen-xl m-auto">
            <div className="w-full relative select-none">
                <div className="w-10/12 mx-auto">
                    <img src={`/img/zone/presell/carousel/${featuredImages[currentIndex]}`} alt="" />
                </div>
                <div className="absolute w-full z-10 top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                    <button className="p-4 rounded-full shadow-border_shadow_button" onClick={handleOnPrevClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="p-4 rounded-full shadow-border_shadow_button" onClick={handleOnNextClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel