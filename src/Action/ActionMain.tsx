import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/ActionMain.css';
import { Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-6 top-1/2 text-4xl transform -translate-y-1/2 text-black  p-2 z-10"
            onClick={onClick}
        >
            <LeftOutlined />

        </div>
    );
};

const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-0 top-1/2 text-4xl transform -translate-y-1/2 text-black  p-2 z-10"
            onClick={onClick}
        >
            <RightOutlined />
        </div>
    );
};

const ActionMain = () => {
    const images = [
        { src: "../images/sanpham1.jpg", alt: "sanpham1" },
        { src: "../images/sanpham2.jpg", alt: "sanpham2" },
        { src: "../images/sanpham3.jpg", alt: "sanpham3" },
        { src: "../images/sanpham4.jpg", alt: "sanpham4" },
        { src: "../images/sanpham7.jpg", alt: "sanpham7" },
        { src: "../images/sanpham8.jpg", alt: "sanpham8" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<Slider | null>(null);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <>
            <div className="relative w-[550px] h-[auto] pt-5">
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image src={image.src} alt={image.alt} className="block w-full h-auto" />
                        </div>
                    ))}
                </Slider>
                <img src="../images/asus.jpg" alt="" width="130" className="absolute top-5 right-0 z-10" />
            </div>
            <div className="relative w-[550px]  overflow-x-auto cursor-grab">
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
