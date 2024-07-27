import React, { useState } from 'react'

const ActionMain = () => {
    const images = [
        '../images/sanpham1.jpg',
        '../images/sanpham2.jpg',
        '../images/sanpham3.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <>
            <div className="relative">
                <img src={images[currentIndex]} alt="" width="550" height="500" className="block" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9 absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
                    onClick={handlePrevClick}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9 absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleNextClick}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <img src="../images/asus.jpg" alt="" width="150" height="150" className="absolute top-0 right-0 z-10" />
            </div>
        </>
    )
}

export default ActionMain
