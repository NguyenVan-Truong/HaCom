import React from 'react';
import ActionHotline from '../Action/ActionHotline';
import ActionSupport from '../Action/ActionSupport';
import ActionOnline from '../Action/ActionOnline';

const Header = () => {
    return (
        <div className="container mx-auto w-full max-w-full px-4 ">
            <div className="flex flex-wrap justify-center bg-gray-100 items-center w-full max-w-full px-4 space-x-4">
                <div className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    {/* <h6 className="text-sm">Gọi mua hàng: <b>1900.1903</b></h6> */}
                    <ActionHotline />
                </div>
                <ActionOnline />
                <div className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <h6 className="text-sm">Tìm cửa hàng gần nhất</h6>
                </div>
                <ActionSupport />
            </div>

            <hr className='mt-1' />


            {/* Header2    */}

            <div className="flex flex-wrap justify-center items-center space-x-4">
                <button className='flex items-center space-x-1 border border-gray-300 p-1 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <h6>Danh Mục</h6>
                </button>
                <img src="../images/logo.png" alt="" width={110} height={110} />
                <form className="flex items-center border border-red-500 rounded-3xl overflow-hidden">
                    <input
                        type="text"
                        placeholder="Nhập tên sản phẩm, từ khoá cần tìm"
                        className="flex-grow px-4 py-2 focus:outline-none"
                        style={{ width: '350px' }}
                    />
                    <button
                        type="submit"
                        className="bg-red-500 border border-red-500 p-2 flex items-center justify-center w-12"
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

                <div className="flex items-center space-x-1">
                    <div className="relative flex items-center justify-center">
                        <div className="w-11 h-11 border-2 border-gray-500 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                        </div>
                        <h6 className="text-sm">Xây dựng <br /> cấu Hình</h6>
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="relative flex items-center justify-center">
                        <div className="w-11 h-11 border-2 border-gray-500 rounded-full flex items-center justify-center">
                            <img
                                src="../images/cart.jpg"
                                alt="Cart"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                    </div>
                    <h6 className="text-sm">Tra cứu <br /> đơn hàng</h6>
                </div>
                <div className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <h6 className="text-sm">Giỏ hàng</h6>
                </div>
            </div>



        </div>
    );
}

export default Header;