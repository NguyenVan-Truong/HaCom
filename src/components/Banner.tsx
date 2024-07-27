import React from 'react'
import ActionBanner from '../Action/ActionBanner';

const Banner = () => {
    return (
        <>
            <div className='ml-32'>
                <h2 className=' mt-2 text-xl'><b>Sức mạnh đáng tin cậy</b></h2>
                <p className='mt-2 pb-2 mx-8 w-[1250px] text-left'><b>Asus TUF Gaming A15</b> mang hiệu năng đáng tin cậy để chơi game, thực hiện đa tác vụ với bộ xử lý AMD Ryzen 5 7535HS có thể kích hoạt
                    tới 12 luồng để cung cấp năng lượng cho các tác vụ đa nhiệm. Kết hợp với đó là GPU rời NIVIDIA Geforce RTX 2050 giúp tạo nên tốc độ khung hình
                    đáng kinh ngạc trong các tựa game phổ biến hiện nay. Tăng tốc độ thời gian tải khi khởi động máy hay các ứng dụng với ổ cứng SSD NVMe 512GB với
                    khả năng nâng cấp thêm 1 ổ SSD thứ hai, cho bạn không gian siêu rộng lớn để lưu trữ các tựa game yêu thích.</p>
            </div >
            {/* <img src="../images/sanpham6.jpg" alt="" className='ml-44' />
            <div className='flex items-center justify-center '>
                <button
                    className="px-6 py-2 bg-gray-200 hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-600 hover:text-white rounded-3xl text-gray-700 border border-gray-400 focus:outline-none"
                >
                    Xem Thêm
                </button>
            </div> */}
            <ActionBanner />
        </>
    )
}

export default Banner
