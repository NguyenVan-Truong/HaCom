
import Slider from 'react-slick'
import ActionHotline from '../Action/ActionHotline'
import ActionOnline from '../Action/ActionOnline'
import ActionSupport from '../Action/ActionSupport'
import { CheckOutlined, StarOutlined } from '@ant-design/icons';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };
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

    const setting2s = {
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
    const setting1s = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <>
            <div className='container mx-auto'>
                <div className=" overflow-x">
                    <div className="flex w-[1345px] bg-gray-100  items-center space-x-4 p-4">
                        <div className="flex items-center space-x-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <ActionHotline />
                        </div>
                        <ActionOnline />
                        <div className="flex items-center space-x-1 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <h6 className="text-sm text-[12px]">Tìm cửa hàng gần nhất</h6>
                        </div>
                        <div className='flex-shrink-0'><ActionSupport /></div>
                    </div>

                    <div className=" flex items-center space-x-4 bg-white mx-4">
                        <img src="../images/logo.png" alt="" width={110} height={110} />

                        <form className="flex items-center border border-red-500 rounded-3xl">
                            <input
                                type="text"
                                placeholder="Nhập tên sản phẩm, từ khoá cần tìm"
                                className="flex-grow px-6 py-2 focus:outline-none rounded-3xl"
                                style={{ width: '450px' }}
                            />
                            <button
                                type="submit"
                                className="bg-red-500 border border-red-500 p-2 flex items-center  rounded-r-3xl w-12"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </form>

                        <img src="../images/facebook.png" alt="" width={40} height={40} />
                        <img src="../images/instagram.jpg" alt="" width={40} height={40} />
                        <img src="../images/tiktok.png" alt="" width={40} height={40} />
                        <img src="../images/news.jpg" alt="" width={40} height={40} />
                        <img src="../images/youtube.png" alt="" width={40} height={40} />

                        <div className='flex space-x-3'>
                            <div className="flex items-center space-x-1 w-[100px] flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <h6 className="text-sm">Xây Dựng <br />Cấu hình</h6>
                            </div>
                            <div className="flex items-center space-x-1 w-[100px] flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <h6 className="text-sm">Tra cứu <br />Đơn Hàng</h6>
                            </div>
                            <div className="flex items-center space-x-1 w-[80px] flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                <h6 className="text-sm">Liên hệ <br />CSKH</h6>
                            </div>
                        </div>
                    </div>


                    <div className='flex w-[1345px] mx-6 space-x-2'>
                        <div className=" md:w-[250px] border border-black rounded-md">
                            <ul className="text-[14px] space-y-2 p-4">
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span >LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span >LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span >LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span >LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span>LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span>LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span>LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span>LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span>LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span>LapTop , Macbook , Surface</span>
                                </li>
                                <li className="flex items-center p-2 border-b border-black text-gray-700 hover:bg-gray-200 rounded">
                                    <span>LapTop , Macbook , Surface</span>
                                </li>
                            </ul>
                        </div>
                        <div className='w-[700px]'>
                            <Slider {...settings}>
                                <div>
                                    <img src="../images/banner1.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../images/banner2.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../images/banner3.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../images/banner4.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="../images/banner5.jpg" alt="" />
                                </div>

                            </Slider>
                            <div className='flex space-x-4'>
                                <img src="../images/banner1.jpg" alt="" width={340} />
                                <img src="../images/banner2.jpg" alt="" width={340} />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col space-y-2 max-w-[340px]'>
                                <img src="../images/banner3.jpg" alt="" className="w-full" />
                                <img src="../images/banner4.jpg" alt="" className="w-full" />
                                <img src="../images/banner5.jpg" alt="" className="w-full" />
                            </div>
                        </div>

                    </div>

                    <div className='ml-20 w-[1300px]'>
                        <img src="../images/artical.jpg" alt="" />
                    </div>

                    <div className='flex space-x-2 '>
                        <div className='w-[330px] space-x-2'>
                            <h1 className='text-center text-[24px] text-red-600'>TOP PC DOANH NGHIỆP BÁN CHẠY NHẤT 2024</h1>
                            <Slider {...settings}>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home1.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=' ml-2 border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home2.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home3.jpg" alt="" className='mx-auto' />                                <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <button className='mt-4 bg-blue-900 text-white w-[320px] p-2'>
                                Xem tất cả sản phẩm
                            </button>
                        </div>
                        <div className='w-[330px]'>
                            <h1 className='text-center text-[24px] text-red-600'>TOP PC DOANH NGHIỆP BÁN CHẠY NHẤT 2024</h1>
                            <Slider {...settings}>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home4.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home5.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home1.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <button className='mt-4 bg-blue-900 text-white w-[320px] p-2'>
                                Xem tất cả sản phẩm
                            </button>
                        </div>
                        <div className='w-[330px]'>
                            <h1 className='text-center text-[24px] text-red-600'>TOP PC DOANH NGHIỆP BÁN CHẠY NHẤT 2024</h1>
                            <Slider {...settings}>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home2.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home3.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home4.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <button className='mt-4 bg-blue-900 text-white w-[330px] p-2'>
                                Xem tất cả sản phẩm
                            </button>
                        </div>
                        <div className='w-[330px]'>
                            <h1 className='text-center text-[24px] text-red-600'>TOP PC DOANH NGHIỆP BÁN CHẠY NHẤT 2024</h1>
                            <Slider {...settings}>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home5.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home1.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm  mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                        <img src="../images/home2.jpg" alt="" className='mx-auto' />
                                        <div className='p-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex'>
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                    <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                </div>
                                                <div className='mr-5'>
                                                    <span>Mã : LTAU811</span>
                                                </div>
                                            </div>
                                            <h5 className='font-medium text-sm mt-2'>
                                                PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                            </h5>
                                            <div className=' mt-2'>
                                                <span>
                                                    <s>8.000.000</s>
                                                    <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                                </span>
                                            </div>
                                            <p className='font-bold  mt-2'>13.499.000</p>
                                            <div className='text-green-600  mt-2'>
                                                <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <button className='mt-4 bg-blue-900 text-white w-[330px] p-2'>
                                Xem tất cả sản phẩm
                            </button>
                        </div>

                    </div>

                    <div className='flex w-[1350px] justify-between mt-4'>
                        <h1 className='font-bold text-[20px]'>LAPTOP, MACBOOK ,SURFACE </h1>
                        <div className='space-x-2'>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>APPLE</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>DELL</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ASUS</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ACER</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>MSi</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>LENGVO</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Xách Tay</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Bảng</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Dọc Sách</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Đông Hồ Thông Minh </span>
                            <span className='bg-red-700 text-white rounded-md p-1'>Xem Tất Cả</span>
                        </div>
                    </div>

                    <div className=' w-[1350px] mt-5'>
                        <Slider {...setting1s} >
                            <div >
                                <div className='m-2 border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home3.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home4.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home5.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <div className='flex w-[1350px] justify-between mt-4'>
                        <h1 className='font-bold text-[20px]'>LAPTOP, MACBOOK ,SURFACE </h1>
                        <div className='space-x-2'>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>APPLE</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>DELL</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ASUS</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ACER</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>MSi</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>LENGVO</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Xách Tay</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Bảng</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Dọc Sách</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Đông Hồ Thông Minh </span>
                            <span className='bg-red-700 text-white rounded-md p-1'>Xem Tất Cả</span>
                        </div>
                    </div>

                    <div className=' w-[1350px] mt-5'>
                        <Slider {...setting1s} >
                            <div >
                                <div className='m-2 border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home3.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home4.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home5.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <div className='flex w-[1350px] justify-between mt-4'>
                        <h1 className='font-bold text-[20px]'>LAPTOP, MACBOOK ,SURFACE </h1>
                        <div className='space-x-2'>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>APPLE</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>DELL</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ASUS</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ACER</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>MSi</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>LENGVO</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Xách Tay</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Bảng</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Dọc Sách</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Đông Hồ Thông Minh </span>
                            <span className='bg-red-700 text-white rounded-md p-1'>Xem Tất Cả</span>
                        </div>
                    </div>

                    <div className=' w-[1350px] mt-5'>
                        <Slider {...setting1s} >
                            <div >
                                <div className='m-2 border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home3.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home4.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home5.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <div className='flex w-[1350px] justify-between mt-4'>
                        <h1 className='font-bold text-[20px]'>LAPTOP, MACBOOK ,SURFACE </h1>
                        <div className='space-x-2'>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>APPLE</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>DELL</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ASUS</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ACER</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>MSi</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>LENGVO</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Xách Tay</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Bảng</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Dọc Sách</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Đông Hồ Thông Minh </span>
                            <span className='bg-red-700 text-white rounded-md p-1'>Xem Tất Cả</span>
                        </div>
                    </div>

                    <div className=' w-[1350px] mt-5'>
                        <Slider {...setting1s} >
                            <div >
                                <div className='m-2 border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home3.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home4.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home5.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <div className='flex w-[1350px] justify-between mt-4'>
                        <h1 className='font-bold text-[20px]'>LAPTOP, MACBOOK ,SURFACE </h1>
                        <div className='space-x-2'>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>APPLE</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>DELL</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ASUS</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>ACER</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>MSi</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>LENGVO</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Xách Tay</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Bảng</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Máy Tính Dọc Sách</span>
                            <span className='border border-gray-200 bg-slate-200 rounded-md p-1'>Đông Hồ Thông Minh </span>
                            <span className='bg-red-700 text-white rounded-md p-1'>Xem Tất Cả</span>
                        </div>
                    </div>

                    <div className=' w-[1350px] mt-5'>
                        <Slider {...setting1s} >
                            <div >
                                <div className='m-2 border border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home3.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home4.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home5.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home1.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='border m-2 border-gray-600 shadow-md shadow-black  rounded-xl'>
                                    <img src="../images/home2.jpg" alt="" className='mx-auto' width={150} />
                                    <div className='p-4'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex'>
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                                <StarOutlined style={{ fontSize: '12px', color: '#fadb14' }} />
                                            </div>
                                            <div className=''>
                                                <span>Mã : LTAU811</span>
                                            </div>
                                        </div>
                                        <h5 className='font-medium  mt-2'>
                                            PC Dell Optiplex 7010 SFF (i5 13500 8GB RAM/256GB SSD/ K+M/Ubuntu/Đen) (7010SFF8G2561Y)
                                        </h5>
                                        <div className=' mt-2'>
                                            <span>
                                                <s>8.000.000</s>
                                                <span className='text-red-700 ml-2'>(Tiết Kiệm : 11%)</span>
                                            </span>
                                        </div>
                                        <p className='font-bold  mt-2'>13.499.000</p>
                                        <div className='text-green-600  mt-2'>
                                            <CheckOutlined style={{ fontSize: '15px', color: '#52c41a' }} /> Sẵn Sàng
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>


                    <div className='flex w-[1350px] mt-10 space-x-5'>
                        <div className='border bg-repeating-gradient border-red-600 w-[300px] rounded-xl flex flex-col items-center'>
                            <div className='flex  mt-20 mb-20 items-center'>
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
                        <div className='border bg-repeating-gradient border-red-600 rounded-xl flex  items-center'>
                            <Slider {...setting2s} className='w-[1000px]'>
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


                    <div className="w-[1350px] flex flex-col   items-center mt-5 bg-black text-white text-center">
                        <h1 className='font-bold text-xl mt-10'>ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ</h1>
                        <form action="" className=" mt-5 mb-10 flex items-center">
                            <input type="text" placeholder="Nhập email hoặc số điện thoại của bạn" required className="p-2 border border-gray-300  w-[450px]" />
                            <button className="p-2.5 bg-red-500 text-white w-[150px] ">Gửi</button>
                        </form>
                    </div>
                    <div className='flex w-[1350px] flex-col items-center mt-5'>
                        <h1 className='font-bold text-xl mt-3' >HỆ THỐNG CÁC SHOWROOM CỦA HACOM</h1>
                        <div className='border border-black w-[200px]'></div>
                    </div>


                    <div className="flex w-[1340px] ml-10 mb-4">
                        <div className="flex space-x-10 mt-5">
                            <div className="flex-1  w-xl">
                                <div className="flex items-center">
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">1</span>
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
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">2</span>
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
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">3</span>
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
                    <div className="flex w-[1340px] ml-10 mb-4">
                        <div className="flex space-x-10 mt-5">
                            <div className="flex-1 w-3xl">
                                <div className="flex items-center">
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">1</span>
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
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">2</span>
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
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">3</span>
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
                    <div className="flex w-[1340px] ml-10  mb-4">
                        <div className="flex space-x-10 mt-5">
                            <div className="flex-1 w-3xl">
                                <div className="flex items-center">
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">1</span>
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
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">2</span>
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
                                    <span className="bg-red-500 text-white w-8 h-8 flex pl-3 items-center ">3</span>
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
                    <div className='flex w-[1350px]  flex-row space-x-14 p-5 bg-slate-200  border-t border-t-gray-600 border-b border-b-gray-600 border-b-dashed-custom'>
                        <div className='flex space-x-2 ml-10'>
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
                    <div className='mt-5  flex flex-row  space-x-28'>
                        <div className='ml-7'>
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
                    <div className='bg-black w-[1350px] mt-5 items-center '>
                        <div className='flex flex-wrap '>
                            <div className=' pt-8 ml-5 pb-12 w-full max-w-[1200px]  text-white'>
                                <p className='pb-2'>© 2024 Công ty Cổ phần đầu tư công nghệ HACOM</p>
                                <p className='pb-2'>Trụ sở chính: Số 129+131 Lê Thanh Nghị, Phường Đồng Tâm, Quận Hai Bà Trưng, Thành phố Hà Nội</p>
                                <p className='pb-2'>VPGD: Tầng 3 Tòa nhà LILAMA, số 124 Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Thành phố Hà Nội</p>
                                <p className='pb-2'>GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001</p>
                                <p className='pb-2'></p>
                            </div>
                        </div>
                    </div>



                </div>
            </div >
        </>
    )

}

export default Home