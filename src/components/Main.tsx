import React, { useState } from 'react'
import ActionMain from '../Action/ActionMain';
import ToggleButtons from '../Action/ActionButtonView';
import "../css/ActionMain.css";
const Main = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    return (
        <>
            <div className='flex flex-col items-center '>
                {/* Tiêu Đề */}
                <div className='flex justify-center items-center mt-10'>
                    <div className='border-b-2 border-gray-200 pb-2 mx-8 w-[1250px] text-left'>
                        <h1 className='text-2xl font-bold'>
                            LAPTOP ASUS GAMING TUF FA506NF-HN005W (R5 7535HS/8GB RAM/512GB SSD/15.6 FHD 144HZ/RTX2050 4GB/WIN11/ĐEN)
                        </h1>
                    </div>
                </div>
                {/* Thông Tin */}
                <div className=" flex justify-center pb-2 mx-8 w-[1250px] text-left ">
                    {/* bên trái */}
                    <div className="sticky-left flex-1 space-x-6 flex-shrink-0">
                        <ActionMain />
                        <div className='relative flex justify-center items-center mt-5'>
                            <div className="w-32 flex flex-col items-center">
                                <img src="../images/sanpham5.jpg" alt="Hình ảnh chụp sản phẩm" width={50} height={50} className="border-2 border-gray-400 p-1 rounded-lg" />
                                <span className='text-center'>Hình ảnh chụp sản phẩm</span>
                            </div>
                            <div className='w-32 flex flex-col items-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 , border-2 border-red-400 p-1 rounded-lg bg-red-600 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                </svg>
                                <span className='text-center'>Thông số <br /> kỹ thuật</span>
                            </div>
                        </div>
                    </div>

                    {/* bên phải */}
                    <div className="content flex-grow ml-4 p-5 w-[150px] ">
                        <div>
                            <div className=' flex space-x-4'>
                                <span>Mã SP : <b className='text-blue-600'>LTAU857</b> </span> <div> | </div>
                                <span className='flex'>
                                    <span>
                                        Đánh giá :
                                    </span>

                                    <span className='flex mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </span>
                                    <div className='ml-2 text-blue-600'>0</div>
                                </span><div> | </div>
                                <span>Bình luận : <span className='text-blue-600'>0</span></span><div> | </div>
                                <span>Lượt xem : <span className='text-blue-600'>3.456</span></span>
                            </div>
                            <div>
                                <h2 className='text-xl'><b>Thông số sản phẩm</b></h2>
                            </div>
                            <ul className="list-none pl-5">
                                <li className="custom-list-item mb-2">
                                    CPU : AMD Ryzen™ 5 7535HS
                                </li>
                                <li className="custom-list-item mb-2">
                                    RAM: 8GB DDR5 4800MHz (2x SO-DIMM socket, tối đa 32 GB SDRAM)
                                </li>
                                <li className="custom-list-item mb-2">
                                    Ổ cứng: 512GB PCIe® 4.0 NVMe™ M.2 SSD (Còn trống 1 khe SSD M.2 PCIE)
                                </li>
                                <li className="custom-list-item mb-2">
                                    VGA: NVIDIA® GeForce RTX™ 2050 Laptop GPU
                                </li>
                                <li className="custom-list-item mb-2">
                                    Màn hình: 15.6-inch FHD (1920 x 1080) 16:9, 144Hz, Value IPS-level, 250nits, 45% NTSC, 62.5% sRGB, Anti-glare display, Adaptive-sync
                                </li>
                                <ToggleButtons />
                            </ul>
                            <div className='border-2 border-dotted border-gray-400 p-4 rounded-lg mt-3'>
                                <h2 className='text-xl'>Giá khuyến mại :</h2>
                                <div className='flex items-center space-x-2'>
                                    <span className='flex text-2xl font-bold'>26.990.000 <div className='mb-4 ml-1 text-sm border-b-2 border-b-gray-500'>đ</div></span>
                                </div>
                                <div className='bg-gradient-to-r from-blue-800 to-red-800 p-4 rounded-lg text-white'>
                                    <h2 className='text-xl'>Giá Ưu đãi đặc biệt :</h2>
                                    <div className='flex space-x-7 items-center justify-start '>
                                        <span className='flex text-4xl font-medium'>
                                            16.499.000
                                            <div className='mb-4 ml-1 text-sm border-b-2 border-b-gray-500'>đ</div>
                                        </span>
                                        <span className='flex text-xl font-medium mt-5'>
                                            <s>19.999.000</s>
                                            <div className='mb-4 ml-1 text-sm border-b-2 border-b-gray-500'>đ</div>
                                        </span>
                                        <span className='flex text-lg mt-5 mr-2'>
                                            Tiết kiệm : 3.500.000
                                            <div className='mb-4 ml-1 text-sm border-b-2 border-b-gray-500'>đ</div>
                                        </span>
                                    </div>
                                </div>

                                <div className='flex space-x-5 '>
                                    <div className='bg-custom-yellow  text-blue-800 font-semibold text-xs p-1 rounded-md mt-2'>
                                        <span>Giá đã bao gồm VAT</span>
                                    </div>
                                    <div className='bg-custom-yellow text-blue-800 font-semibold text-xs p-1 rounded-md mt-2 '>
                                        <span>Bảo hành : 24 tháng</span>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 border-gray-300 mt-2 rounded-xl'>
                                <div className='flex text-red-600 space-x-1 p-1 bg-gray-200 rounded-t-xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>
                                    <h3>Quà tặng và ưu đãi kèm theo </h3>
                                </div>
                                <div className='container mx-auto'>
                                    <div className='p-10 '>
                                        <div className='flex items-center text-red-500 -mt-4 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                            </svg>

                                            <h3 className="mx-2">Ưu Đãi Học Sinh - Sinh Viên</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                            </svg>
                                        </div>
                                        <ul className='list-disc ml-5 mt-5 border-2 border-white border-b-gray-500 pb-9' >
                                            <li className='flex items-center'>
                                                <span className='list-item flex-grow'>
                                                    <a href="" >
                                                        Giảm thêm <span className='text-red-600'>200.000đ</span> - Không áp dụng Khuyến Mãi cho Macbook, Surface và Laptop cũ (xem chi tiết)
                                                    </a>
                                                </span>

                                            </li>
                                        </ul>


                                    </div>
                                    <div className='p-10 '>
                                        <div className='flex items-center text-red-500 -mt-4 '>

                                            <h3 className="mx-2">BỘ QUÀ TẶNG TRỊ GIÁ 1.399.000Đ</h3>

                                        </div>
                                        <ul className='list-disc ml-5 mt-5 border-2 border-white border-b-gray-500 pb-9' >
                                            <li className='flex items-center'>
                                                <span className='list-item flex-grow'>
                                                    <a href="" >
                                                        MUA ASUS TUF GAMING A15 - NHẬN QUÀ ĐỘC QUYỀN TỪ ROG
                                                    </a>
                                                </span>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='list-item flex-grow'>
                                                    <a href="" >
                                                        Tặng ngay chuột Gaming Logi G102 trị giá 399.000đ (MELO149)
                                                    </a>
                                                </span>
                                            </li>
                                            <li className='flex items-center'>
                                                <span className='list-item flex-grow'>
                                                    <a href="" >
                                                        Tặng phiếu vệ sinh bảo dưỡng Laptop, PC miễn phí trọn đời trị giá 999.000đ (THEK417)
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className='flex text-red-600 mt-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <span>Cam kết giá tốt nhất thị trường, liên hệ 19001903 hoặc đến tận nơi để có giá tốt nhất!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center space-x-3 ">
                                <span >Số lượng:</span>
                                <div className=' rounded-sm border-2 border-gray-200'>
                                    <button
                                        onClick={handleDecrease}
                                        className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-400 rounded-sm focus:outline-none"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg px-6">{quantity}</span>
                                    <button
                                        onClick={handleIncrease}
                                        className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-400 rounded-sm focus:outline-none"
                                    >
                                        +
                                    </button>

                                </div>
                                <button
                                    className=" px-6 py-2 bg-gray-200 hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-600 hover:text-white text-gray-700 border border-gray-400 rounded-sm focus:outline-none "
                                >
                                    Thêm vào giỏ hàng
                                </button>
                                <button className='py-2 px-4 bg-gray-200 text-gray-700 border border-gray-400 rounded-sm flex items-center justify-center space-x-2 hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-600 hover:text-white focus:outline-none transition-colors duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <div className='flex flex-col items-center rounded-xl justify-center bg-red-600 text-white p-2 mt-2 group'>
                                    <h1 className='text-2xl font-bold mb-2 shadow-lg group-hover:shadow-2xl transition-shadow duration-300'>
                                        ĐẶT MUA NGAY
                                    </h1>
                                    <p className='text-lg shadow-md group-hover:shadow-lg transition-shadow duration-300'>
                                        Giao nhanh tận nơi, miễn phí toàn quốc
                                    </p>
                                </div>

                                <div className=' flex space-x-4 mt-2'>
                                    <div className='bg-blue-700 text-white p-2 rounded-xl shadow-md'>
                                        <h1 className=' font-bold mb-2'>TRẢ GÓP HỒ SƠ DUYỆT 15 PHÚT</h1>
                                        <p className='text-lg'>Chỉ từ 2.749.836đ/tháng (6 tháng)</p>
                                    </div>
                                    <div className='bg-blue-700 text-white p-2 rounded-xl shadow-md'>
                                        <h1 className='font-bold mb-2'>TRẢ GÓP QUA THẺ VISA, MASTER,...</h1>
                                        <p className='text-lg'>Chỉ từ 2.749.836đ/tháng (12 tháng)</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='border-b-2 border-gray-300 pb-2 mx-8 w-[1250px] text-left'>
                        <h6 className='text-xl font-bold'>
                            Đánh giá: Laptop Asus Gaming TUF FA506NF-HN005W (R5 7535HS/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX2050 4GB/Win11/Đen)
                        </h6>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main