import React from 'react';
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/ActionFooter.css';
// Component mũi tên điều hướng tùy chỉnh
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="arrow-prev" onClick={onClick}>
            <LeftOutlined />
        </div>
    );
};

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="arrow-next" onClick={onClick}>
            <RightOutlined />
        </div>
    );
};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

const Footer = () => {
    return (
        <>
            <div className='flex justify-center mt-10 space-x-5'>
                <div className='border bg-repeating-gradient border-red-600 w-[300px] rounded-xl flex flex-col items-center'>
                    <div className='flex justify-center mt-20 mb-20 items-center'>
                        <div className='rounded-lg'>
                            <img className="rotate-image rounded-lg mb-4 ml-8" src="../images/sanpham1.jpg" alt="" width={50} />
                            <div className='rotate-block'>
                                <img className="rotate-image rounded-lg mb-3 ml-7" src="../images/sanpham1.jpg" alt="" width={50} />
                                <img className="rotate-image rounded-lg mb-5" src="../images/sanpham1.jpg" alt="" width={50} />
                            </div>
                            <img className="rotate-image rounded-lg ml-8" src="../images/sanpham1.jpg" alt="" width={50} />
                        </div>
                        <div className='w-[165px] text-center'>
                            <h1 className='text-3xl font-bold text-red-800'>Cảm Ơn</h1>
                            <p className='text-4xl text-white'>1.000.000+</p>
                            <p className='text-white ml-6'>KHÁCH HÀNG ĐÃ VÀ ĐANG ỦNG HỘ</p>
                            <img className='-mt-5 ml-5 ' src="../images/logo.png" alt="" width={100} />
                        </div>
                    </div>
                </div>
                <div className='border bg-repeating-gradient border-red-600 rounded-xl flex justify-center items-center'>
                    <Slider {...settings} className='w-[900px]'>
                        <div className='m-4'>
                            <img className='rounded-xl' src="../images/anh1.jpg" alt="" />
                        </div>
                        <div className='m-4'>
                            <img className='rounded-xl' src="../images/anh2.jpg" alt="" />
                        </div>
                        <div className='m-4'>
                            <img className='rounded-xl' src="../images/anh3.jpg" alt="" />
                        </div>
                        <div className='m-4'>
                            <img className='rounded-xl' src="../images/anh4.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5 bg-black text-white text-center">
                <h1 className='font-bold text-xl mt-10'>ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h1>
                <form action="" className=" mt-5 mb-10 flex items-center">
                    <input type="text" placeholder="Nhập email hoặc số điện thoại của bạn" required className="p-2 border border-gray-300  w-[450px]" />
                    <button className="p-2.5 bg-red-500 text-white w-[150px] ">Gửi</button>
                </form>
            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
                <h1 className='font-bold text-xl mt-3' >HỆ THỐNG CÁC SHOWROOM CỦA HACOM</h1>
                <div className='border border-black w-[200px]'></div>
            </div>
            <div className="flex justify-center mb-4">
                <div className="flex space-x-10 mt-5">
                    <div className="flex-1 w-xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">1</span>
                            <span className="bg-blue-950 text-white px-5 w-[350px] font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>

                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">2</span>
                            <span className="bg-blue-950 text-white w-[350px] px-5 font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>

                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">3</span>
                            <span className="bg-blue-950 text-white w-[350px] px-5 font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-4">
                <div className="flex space-x-10 mt-5">
                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">1</span>
                            <span className="bg-blue-950 text-white px-5 w-[350px] font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>

                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">2</span>
                            <span className="bg-blue-950 text-white w-[350px] px-5 font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>

                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">3</span>
                            <span className="bg-blue-950 text-white w-[350px] px-5 font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-4">
                <div className="flex space-x-10 mt-5">
                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">1</span>
                            <span className="bg-blue-950 text-white px-5 w-[350px] font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>

                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">2</span>
                            <span className="bg-blue-950 text-white w-[350px] px-5 font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>

                    <div className="flex-1 w-3xl">
                        <div className="flex items-center">
                            <span className="bg-red-500 text-white w-8 h-8 flex items-center justify-center">3</span>
                            <span className="bg-blue-950 text-white w-[350px] px-5 font-bold text-base py-1">HACOM-HAI BÀ TRƯNG</span>
                        </div>
                        <div>
                            <p className="font-medium">Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
                            <p className="p-1 text-red-700">Hình ảnh thực tế showroom</p>
                            <p className="p-1 text-red-700">xem bản đồ đường đi</p>
                            <p className='p-1'>Tel: 1900 1903 (máy lẻ 25398) - (0243) 6285551</p>
                            <p className='p-1'>Email: kdbl.haibatrung@hacom.vn</p>
                            <p className='p-1'>Thời gian mở cửa: Từ 8h - 20h hàng ngày</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row space-x-14 p-5 bg-slate-200 justify-center border-t border-t-gray-600 border-b border-b-gray-600 border-b-dashed-custom'>
                <div className='flex space-x-2'>
                    <i className="text-4xl text-red-600 bi bi-truck"></i>
                    <div className='text-black text-xl'>
                        <h1 className='font-bold'>CHÍNH SÁCH GIAO HÀNG</h1>
                        <p className='text-sm'>Nhận hàng với thanh toán tại nhà</p>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <i className="text-4xl text-red-600 bi bi-arrow-repeat"></i>
                    <div className='text-black text-xl'>
                        <h1 className='font-bold'>ĐỔI TRẢ DỄ DÀNG</h1>
                        <p className='text-sm'>1 đổi 1 trong 15 ngày</p>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <i className="text-4xl text-red-600 bi bi-credit-card"></i>
                    <div className='text-black text-xl'>
                        <h1 className='font-bold'>THANH TOÁN TIỆN LỢI</h1>
                        <p className='text-sm'>Trả tiền mặt, CK, trả góp 0%</p>
                    </div>
                </div>
                <div className='flex space-x-3'>
                    <i className="text-4xl text-red-600 bi bi-chat-dots"></i>
                    <div className='text-black text-xl'>
                        <h1 className='font-bold'>HỖ TRỢ NHIỆT TÌNH</h1>
                        <p className='text-sm'>Tư vấn, giải đáp mọi thắc mắc</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 flex flex-row justify-center space-x-28'>
                <div>
                    <h1 className='text-xl font-semibold '>GIỚI THIỆU HACOM</h1>
                    <div className='border m-1 border-red-500 w-[100px]'></div>
                    <p className="mb-1">Giới thiệu công ty</p>
                    <p className="mb-1">Liên hệ hợp tác kinh doanh</p>
                    <p className="mb-1">Thông tin tuyển dụng</p>
                    <p className="mb-1">Tin công nghệ</p>
                    <p className="mb-1">Tin tức</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold '>HỖ TRỢ KHÁCH HÀNG</h1>
                    <div className='border m-1 border-red-500 w-[100px]'></div>
                    <p className="mb-1">Tra cứu đơn hàng</p>
                    <p className="mb-1">Hướng dẫn mua hàng trực tuyến</p>
                    <p className="mb-1">Hướng dẫn thanh toán</p>
                    <p className="mb-1">Hướng dẫn mua hàng trả góp</p>
                    <p className="mb-1">In hóa đơn điện tử</p>
                    <p className="mb-1">Góp ý, Khiếu Nại</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold '>CHÍNH SÁCH CHUNG</h1>
                    <div className='border m-1 border-red-500 w-[100px]'></div>
                    <p className="mb-1">Chính sách, quy định chung</p>
                    <p className="mb-1">Chính sách bảo hành</p>
                    <p className="mb-1">Chính sách cho doanh nghiệp</p>
                    <p className="mb-1">Chính sách hàng chính hãng</p>
                    <p className="mb-1">Bảo mật thông tin khách hàng</p>
                    <p className="mb-1">Chính sách nhập lại tính phí</p>
                    <p className="mb-1">Chính sách giao hàng</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold '>THÔNG TIN KHUYẾN MẠI</h1>
                    <div className='border m-1 border-red-500 w-[100px]'></div>
                    <p className="mb-1">Giới thiệu công ty</p>
                    <p className="mb-1">Liên hệ hợp tác kinh doanh</p>
                    <p className="mb-1">Thông tin tuyển dụng</p>
                    <p className="mb-1">Tin công nghệ</p>
                    <p className="mb-1">Tin tức</p>
                </div>
            </div>
            <div className='bg-black mt-5 items-center '>
                <div className='flex flex-wrap justify-center'>
                    <div className=' pt-8  pb-12 w-full max-w-[1200px]  text-white'>
                        <p className='pb-2'>© 2024 Công ty Cổ phần đầu tư công nghệ HACOM</p>
                        <p className='pb-2'>Trụ sở chính: Số 129+131 Lê Thanh Nghị, Phường Đồng Tâm, Quận Hai Bà Trưng, Thành phố Hà Nội</p>
                        <p className='pb-2'>VPGD: Tầng 3 Tòa nhà LILAMA, số 124 Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Thành phố Hà Nội</p>
                        <p className='pb-2'>GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001</p>
                        <p className='pb-2'></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
