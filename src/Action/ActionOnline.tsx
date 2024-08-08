import React from 'react';

const ActionOnline = () => {
    return (
        <div className="relative flex space-x-2">
            <div className="relative flex items-center space-x-1 bg-repeating-gradient mb-2 mt-2 p-2 rounded-full text-white group cursor-pointer z-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <h6 className="text-sm">Mua Hàng Online</h6>
                <div className="absolute overflow-auto top-full left-[-185px] w-[1300px] h-[600px] bg-white border border-red-500 rounded-3xl shadow-lg mt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-30">
                    <div className="p-4">
                        <div className="border border-red-500 text-black p-4 rounded-full w-[500px] mx-auto">
                            <h1 className="text-lg font-bold text-center">Bán Hàng ONLINE Toàn Quốc (8h -24h HÀNG NGÀY)</h1>
                            <p className="italic text-center">(Miễn phí giao hàng toàn quốc)</p>
                        </div>
                        <div className="flex mt-4 space-x-4">
                            <div className="flex-1 min-h-[600px]">
                                <div className="bg-red-500 text-white text-center p-4 rounded-xl mb-4">
                                    <h1 className="text-lg font-bold">Bộ PHẬN KHÁCH HÀNG CÁ NHÂN</h1>
                                    <p>(Tối Ưu và Chuyên Sâu)</p>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <div className='flex justify-center space-x-4'>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-4 mb-2'>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-4 mb-2'>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 min-h-[600px] overflow-auto">
                                <div className="bg-blue-500 text-white text-center p-4 rounded-xl mb-4">
                                    <h1 className="text-lg font-bold">BỘ PHẬN KHÁCH HÀNG DOANH NGHIỆP</h1>
                                    <p>(Cam kết giá tốt nhất cho Khách hàng Doanh Nghiệp)</p>
                                </div>
                                <div className='flex flex-col space-y-4'>
                                    <div className='flex justify-center space-x-4'>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-4 '>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-4 '>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-4 '>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-4 '>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-4 '>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hà</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                        <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                            <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                            <p className="text-sm">hieuhq@hacom.vn</p>
                                            <p className="text-sm">Hotline: 0987.999.999</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex items-center space-x-1 bg-repeating-gradient mb-2 mt-2 p-2 rounded-3xl text-white group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <h6 className="text-sm">Miền Bắc</h6>
                <div className="absolute top-full left-[-185px] w-[1300px] bg-white border border-red-500 rounded-3xl shadow-lg mt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-30">
                    <div className="p-4">
                        <div className="border border-red-500 text-black p-4 rounded-full w-[500px] mx-auto">
                            <h1 className="text-lg font-bold text-center">Bán Hàng ONLINE Toàn Quốc (8h -24h HÀNG NGÀY)</h1>
                            <p className="italic text-center">(Miễn phí giao hàng toàn quốc)</p>
                        </div>
                        <div className="flex mt-4 space-x-4 justify-center">
                            <div className="flex-1">
                                <div className="bg-red-500 text-white text-center p-4 rounded-xl">
                                    <h1 className="text-lg font-bold">Bộ PHẬN KHÁCH HÀNG CÁ NHÂN</h1>
                                    <p>(Tối Ưu và Chuyên Sâu)</p>
                                </div>
                                <div className='flex'>
                                    <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                        <h6 className="font-bold">Mr. Hoàng Quốc hà</h6>
                                        <p className="text-sm">hieuhq@hacom.vn</p>
                                        <p className="text-sm">Hotline: 0987.999.999</p>
                                    </div>
                                    <div className='text-black border border-red-500 p-4 rounded-lg text-center'>
                                        <h6 className="font-bold">Mr. Hoàng Quốc Hiếu</h6>
                                        <p className="text-sm">hieuhq@hacom.vn</p>
                                        <p className="text-sm">Hotline: 0987.999.999</p>
                                    </div>
                                </div>

                            </div>
                            <div className="flex-1">
                                <div className="bg-blue-500 text-white text-center p-4 rounded-xl">
                                    <h1 className="text-lg font-bold">BỘ PHẬN KHÁCH HÀNG DOANH NGHIỆP</h1>
                                    <p>(Cam kết giá tốt nhất cho Khách hàng Doanh Nghiệp)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-1 bg-repeating-gradient mb-2 mt-2 p-2 rounded-3xl text-white group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <h6 className="text-sm">Miền Trung</h6>
                <div className="absolute top-full left-[-185px] w-[1300px] bg-white border border-red-500 rounded-3xl shadow-lg mt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-30">
                    <div className="p-4">
                        <div className="border border-red-500 text-black p-4 rounded-full w-[500px] mx-auto">
                            <h1 className="text-lg font-bold text-center">Bán Hàng ONLINE Toàn Quốc (8h -24h HÀNG NGÀY)</h1>
                            <p className="italic text-center">(Miễn phí giao hàng toàn quốc)</p>
                        </div>
                        <div className="flex mt-4 space-x-4 justify-center">
                            <div className="flex-1">
                                <div className="bg-red-500 text-white text-center p-4 rounded-xl">
                                    <h1 className="text-lg font-bold">Bộ PHẬN KHÁCH HÀNG CÁ NHÂN</h1>
                                    <p>(Tối Ưu và Chuyên Sâu)</p>
                                </div>
                                <div className='text-black'>
                                    <h6>Mr. Hoàng Quốc Hiếu</h6>
                                    <p>hieuhq@hacom.vn</p>
                                    <p>Hotline: 0987.999.999</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="bg-blue-500 text-white text-center p-4 rounded-xl">
                                    <h1 className="text-lg font-bold">BỘ PHẬN KHÁCH HÀNG DOANH NGHIỆP</h1>
                                    <p>(Cam kết giá tốt nhất cho Khách hàng Doanh Nghiệp)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-1 bg-repeating-gradient mb-2 mt-2 p-2 rounded-3xl text-white group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <h6 className="text-sm">Miền Nam</h6>
                <div className="absolute top-full left-[-185px] w-[1300px] bg-white border border-red-500 rounded-3xl shadow-lg mt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-30">
                    <div className="p-4">
                        <div className="border border-red-500 text-black p-4 rounded-full w-[500px] mx-auto">
                            <h1 className="text-lg font-bold text-center">Bán Hàng ONLINE Toàn Quốc (8h -24h HÀNG NGÀY)</h1>
                            <p className="italic text-center">(Miễn phí giao hàng toàn quốc)</p>
                        </div>
                        <div className="flex mt-4 space-x-4 justify-center">
                            <div className="flex-1">
                                <div className="bg-red-500 text-white text-center p-4 rounded-xl">
                                    <h1 className="text-lg font-bold">Bộ PHẬN KHÁCH HÀNG CÁ NHÂN</h1>
                                    <p>(Tối Ưu và Chuyên Sâu)</p>
                                </div>
                                <div className='text-black'>
                                    <h6>Mr. Hoàng Quốc Hiếu</h6>
                                    <p>hieuhq@hacom.vn</p>
                                    <p>Hotline: 0987.999.999</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="bg-blue-500 text-white text-center p-4 rounded-xl">
                                    <h1 className="text-lg font-bold">BỘ PHẬN KHÁCH HÀNG DOANH NGHIỆP</h1>
                                    <p>(Cam kết giá tốt nhất cho Khách hàng Doanh Nghiệp)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionOnline;
