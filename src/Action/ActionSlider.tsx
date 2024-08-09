import React, { useState } from 'react';

const ActionSlider = () => {
    const products = [
        {
            imageUrl: "../images/sanpham1.jpg",
            code: "LTAU827",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "34.000.000",
            discount: "17%",
            discountedPrice: "30.999.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham5.jpg",
            code: "LTAU828",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "20.000.000",
            discount: "10%",
            discountedPrice: "18.000.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham3.jpg",
            code: "LTAU829",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "15.000.000",
            discount: "5%",
            discountedPrice: "14.250.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham4.jpg",
            code: "LTAU829",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "15.000.000",
            discount: "5%",
            discountedPrice: "14.250.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham5.jpg",
            code: "LTAU829",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "15.000.000",
            discount: "5%",
            discountedPrice: "14.250.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham8.jpg",
            code: "LTAU829",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "15.000.000",
            discount: "5%",
            discountedPrice: "14.250.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham7.jpg",
            code: "LTAU829",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "15.000.000",
            discount: "5%",
            discountedPrice: "14.250.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham1.jpg",
            code: "LTAU829",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "15.000.000",
            discount: "5%",
            discountedPrice: "14.250.000đ",
            orderText: "Đặt hàng"
        },
        {
            imageUrl: "../images/sanpham2.jpg",
            code: "LTAU829",
            name: "LAPTOP ASUS GAMING TUF FX5072NU-HN095",
            originalPrice: "15.000.000",
            discount: "5%",
            discountedPrice: "14.250.000đ",
            orderText: "Đặt hàng"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProduct = () => {
        if (currentIndex < products.length - 5) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevProduct = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex items-center w-full max-w-full justify-center">
            <button onClick={prevProduct}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <div className=" overflow-hidden w-[80%]">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                >
                    {products.map((product, index) => (
                        <div key={index} className="flex-shrink-0 w-[20%] p-4">
                            <div className="flex flex-col border-2 rounded-xl border-gray-500 space-y-2 space-x-4 pr-4 pb-4">
                                <img src={product.imageUrl} alt="Sản phẩm" className="w-36 pl-5 ml-9 h-auto rounded-lg" />
                                <div className="flex justify-between items-center space-x-2">
                                    <div className="flex">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex text-sm bg-custom-gray rounded-md text-gray-600">
                                        MÃ : <span>{product.code}</span>
                                    </div>
                                </div>
                                <h3 className="text-sm font-medium pb-2 w-[150px] text-left">{product.name}</h3>
                                <p className="text-base">
                                    <span className="line-through text-gray-500">{product.originalPrice}</span>
                                    <span className="text-red-600">{product.discount}</span>
                                </p>
                                <p className="text-xl font-bold">{product.discountedPrice}</p>
                                <div className="flex items-center text-blue-600 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <p className="text-base">{product.orderText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={nextProduct}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default ActionSlider;
