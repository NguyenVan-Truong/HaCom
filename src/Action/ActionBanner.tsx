import React, { useState } from 'react';

const ActionBanner: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            {!isExpanded ? (
                <>
                    <img src="../images/sanpham6.jpg" alt="" className='ml-44' />
                    <div className='flex items-center justify-center'>
                        <button
                            className="px-6 py-2 bg-gray-200 hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-600 hover:text-white rounded-3xl text-gray-700 border border-gray-400 focus:outline-none"
                            onClick={() => setIsExpanded(true)}
                        >
                            Xem Thêm
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <img src="../images/sanpham1.jpg" alt="" className='ml-80' />
                    <div className='ml-32'>
                        <h2 className='mt-2 text-xl'><b>Thiết kế sang trọng, sắc sảo</b></h2>
                        <p className='mt-2 pb-2 mx-8 w-[1200px] text-left'>
                            <b>Asus TUF Gaming A15 FA506NF</b>mang phong cách đậm chất gaming nổi bật với màu sắc Đen than chì đẹp mắt. Hoàn thiện với kim loại
                            được đánh bóng với các nét đường nét dạng sợi tương phản trên khung máy được cắt gọn gàng. Mặt đáy của máy được thiết kế dạng tổ
                            ong giúp tối ưu cho hệ thống làm mát. Một đồng minh đáng tin cậy cho dù bạn ở bất cứ đâu với tính di động của chiếc laptop Asus TUF
                            Gaming này, di động và bền bỉ, cho phép bạn kết nối với thế giới mà không cần phải thông qua dây nối với Wi-fi 6 802.11ax nhanh chóng
                            , tin cậy đảm bảo cho kết nối mạng để tối ưu cho công việc và giải trí của bạn ở bất cứ nơi nào có kết nối tương thích.

                            .
                        </p>
                    </div>
                    <img src="../images/sanpham5.jpg" alt="" className='ml-72' />
                    <div className='flex items-center justify-center'>
                        <button
                            className="px-6 py-2 bg-gray-200 hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-600 hover:text-white rounded-3xl text-gray-700 border border-gray-400 focus:outline-none"
                            onClick={() => setIsExpanded(false)}
                        >
                            Thu Lại
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default ActionBanner;
