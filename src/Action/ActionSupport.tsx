import React from 'react';
import '../css/ACtionSupport.css';
const ActionSupport = () => {
    return (
        <div className="flex items-center space-x-4">
            {/* Hỗ trợ */}
            <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                    </svg>
                    <h6 className="text-sm">Hỗ trợ</h6>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300  invisible group-hover:visible w-64 z-10">
                    <ul className="list-none p-2 text-sm shadow-2xl">
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Chính sách , quy định chung</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Chính sách giao hàng</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Chính sách bảo hành</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Chính sách cho doanh nghiệp</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Chính sách hàng chính hãng</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Chính sách nhập lại tính phí</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Hướng dẫn mua hàng trực tuyến</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Hướng dẫn thanh toán</span>
                        </li>
                    </ul>
                </div>
            </div>




            {/* Trung tâm dịch vụ */}
            <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h6 className="text-sm">Trung tâm dịch vụ</h6>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-full mt-2 bg-white border border-gray-300 shadow-lg invisible group-hover:visible w-64 z-10">
                    <ul className="list-none p-2">
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Tra cứu đơn hàng</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Tra cứu bảo hành</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">In hoá đơn điển tử</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Góp ý , khiếu nại</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Dịch vụ Sửa chữa - Lắp đặt</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Dịch vụ Thu cũ - Đổi mới</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Dịch vụ Bảo hành mở rộng</span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Khuyến mại */}
            <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    <h6 className="text-sm">Khuyến mại</h6>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 shadow-lg invisible group-hover:visible w-56 z-10">
                    <ul className="list-none p-2">
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Khuyến mại Laptop</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Khuyến mại PC</span>
                        </li>
                        <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                            <span className="ml-1">Khuyến mại phụ kiện</span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Tài khoản */}
            <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <h6 className="text-sm">Tài khoản</h6>
                </div>
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg invisible group-hover:visible w-56 z-10">
                    <ul className="list-none p-2 space-y-1 text-sm">
                        <li className="cursor-pointer hover:bg-gray-100 transition flex items-center justify-center">
                            <span className="font-bold bg-yellow-500 text-white px-2 py-1 rounded w-full text-center">Đăng Nhập</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-100 transition flex items-center justify-center">
                            <span className="font-bold bg-yellow-500 text-white px-2 py-1 rounded w-full text-center">Đăng Ký</span>
                        </li>
                        <li className="cursor-pointer hover:bg-gray-100 transition flex items-center justify-center">
                            <span className="font-bold bg-red-700 text-white px-2 py-1 rounded w-full text-center">Đăng nhập bằng Google</span>
                        </li>
                        <li className=" cursor-pointer hover:bg-gray-100 transition flex items-center justify-center">
                            <span className="font-bold bg-blue-600 text-white px-2 py-1 rounded w-full text-center">Đăng nhập bằng FaceBook</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ActionSupport;
