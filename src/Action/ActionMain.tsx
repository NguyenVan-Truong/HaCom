import React, { useEffect, useState, useRef } from 'react';

const ActionMain = () => {
    const images = [
        { src: "../images/sanpham1.jpg", alt: "sanpham1" },
        { src: "../images/sanpham2.jpg", alt: "sanpham2" },
        { src: "../images/sanpham3.jpg", alt: "sanpham3" },
        { src: "../images/sanpham4.jpg", alt: "sanpham4" },
        { src: "../images/sanpham5.jpg", alt: "sanpham5" },
        { src: "../images/sanpham7.jpg", alt: "sanpham7" },
        { src: "../images/sanpham8.jpg", alt: "sanpham8" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState<number | null>(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (sliderRef.current) {
            setStartX(e.clientX);
            setScrollLeft(sliderRef.current.scrollLeft);
            sliderRef.current.style.cursor = 'grabbing';
            sliderRef.current.style.transition = 'none'; // Disable transition for smooth drag
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (startX !== null && sliderRef.current) {
            const x = e.clientX;
            const walk = (x - startX) * 2; // Adjust scroll speed here
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        if (sliderRef.current) {
            sliderRef.current.style.cursor = 'grab';
            sliderRef.current.style.transition = 'scroll 0.3s ease'; // Re-enable transition
            setStartX(null);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (sliderRef.current) {
            setStartX(e.touches[0].clientX);
            setScrollLeft(sliderRef.current.scrollLeft);
            sliderRef.current.style.cursor = 'grabbing';
            sliderRef.current.style.transition = 'none'; // Disable transition for smooth drag
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startX !== null && sliderRef.current) {
            const x = e.touches[0].clientX;
            const walk = (x - startX) * 2; // Adjust scroll speed here
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleTouchEnd = () => {
        if (sliderRef.current) {
            sliderRef.current.style.cursor = 'grab';
            sliderRef.current.style.transition = 'scroll 0.3s ease'; // Re-enable transition
            setStartX(null);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Chuyển ảnh sau mỗi 3 giây

        return () => clearInterval(interval); // Xoá bộ đếm thời gian khi component bị hủy
    }, [images.length]);

    return (
        <>
            <div className="relative">
                <img src={images[currentIndex].src} alt={images[currentIndex].alt} width="550" height="500" className="block pt-10" />
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
                <img src="../images/asus.jpg" alt="" width="150" className="absolute top-0 right-0 z-10" />
            </div>
            <div
                ref={sliderRef}
                className="relative w-[550px] overflow-x-auto cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="flex whitespace-nowrap">
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-[115px] mx-[12.5px]">
                            <img
                                src={image.src}
                                width={150}
                                alt={image.alt}
                                className="w-32 h-24 border-2 border-gray-300 rounded-xl shadow-2xl transition-colors duration-300 hover:border-black hover:shadow-none cursor-pointer"
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ActionMain;
