import React from 'react'

const ComentAndBlog = () => {
    return (
        <>
            <div className='flex justify-between  p-4'>
                <div className='text-left ml-44 '>
                    <h2 className=' font-medium mb-3 border-b-2 border-b-gray-200' >Khách hàng chấm điểm, đánh giá, nhận xét</h2>
                    <div className=' flex space-x-3'>
                        <div className='flex flex-col items-center'>
                            <div className='mb-2 text-xl text-orange-500 font-medium'>
                                0/5
                            </div>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className='border-2 rounded-lg hover:border-red-600 border-red-600 px-4 py-2 text-center text-sm'>
                                Tất cả
                            </div>
                        </div>

                        <div className='flex space-x-3 justify-center  items-center'>
                            <div className='border-2 rounded-lg hover:border-red-600 border-black px-4 py-2 text-center text-sm flex items-center'>
                                5
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <div className='border-2 rounded-lg hover:border-red-600 border-black px-4 py-2 text-center text-sm flex items-center'>
                                4
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <div className='border-2 rounded-lg hover:border-red-600 border-black px-4 py-2 text-center text-sm flex items-center'>
                                3
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <div className='border-2 rounded-lg hover:border-red-600 border-black px-4 py-2 text-center text-sm flex items-center'>
                                2
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <div className='border-2 rounded-lg hover:border-red-600 border-black px-4 py-2 text-center text-sm flex items-center'>
                                1
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                        </div>
                    </div>



                    <div className='mt-3 border-2 border-gray-300 flex  space-x-5 h-40 rounded-lg'>
                        <div className='flex items-center border-r-2 mt-3 mb-3'>
                            <div className='flex items-center text-red-500  border-gray-600 pr-3 '>
                                <span className='text-3xl ml-5 '>0/5</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                        </div>
                        <div className='border-r-2 border-gray-400  mt-3 mb-3 pr-2'>
                            <div className='flex items-center space-x-3'>
                                <div className='flex items-center'>
                                    <span className=''>5</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>

                                <div className=' flex items-center'>
                                    <div className=' rounded-xl bottom-0 left-0 w-28 h-1 bg-gray-600'></div>

                                </div>

                                <div className='flex items-center'>
                                    <span>0 đánh giá</span>
                                </div>
                            </div>

                            <div className='flex items-center space-x-3'>
                                <div className='flex'>
                                    4
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div className=' flex items-center'>
                                    <div className=' rounded-xl bottom-0 left-0 w-28 h-1 bg-gray-600'></div>

                                </div>
                                <div>
                                    0 đánh giá
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div className='flex'>
                                    3
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div className=' flex items-center'>
                                    <div className=' rounded-xl bottom-0 left-0 w-28 h-1 bg-gray-600'></div>

                                </div>
                                <div>
                                    0 đánh giá
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div className='flex'>
                                    2
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div className=' flex items-center'>
                                    <div className=' rounded-xl bottom-0 left-0 w-28 h-1 bg-gray-600'></div>

                                </div>
                                <div>
                                    0 đánh giá
                                </div>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <div className='flex'>
                                    1
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div className=' flex items-center'>
                                    <div className=' rounded-xl bottom-0 left-0 w-28 h-1 bg-gray-600'></div>

                                </div>
                                <div>
                                    0 đánh giá
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center space-y-2 mt-7 '>
                            <span className='text-lg font-medium mr-5'>Chia sẻ nhận xét về sản phẩm</span>
                            <button className='bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>
                                Viết nhận xét của bạn
                            </button>
                        </div>
                    </div>
                    <div className='border-2 border-gray-500 mt-2 rounded-lg  '>
                        <div>
                            <textarea
                                name=""
                                id=""
                                placeholder='Mời bạn để lại bình luận ...'
                                className='w-full h-32 p-2 resize-none border border-gray-300 rounded-md focus:outline-none'
                            ></textarea>


                        </div>
                        <div className='flex justify-between items-center mt-2'>
                            <div className='text-left flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <span>Gửi ảnh</span>
                            </div>
                            <button className='bg-blue-500 text-white px-4 py-2 mr-2 mb-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>
                                Gửi bình luận
                            </button>
                        </div>
                    </div>

                </div>
                <div className=' ml-24'>
                    <h2 className='font-medium mb-3 border-b-2 w-[450px] text-left border-b-gray-200'>Tin tức mới nhất</h2>
                    <div className='border-b-2  w-[450px] text-left border-b-gray-200'>
                        <img src="../images/blog1.jpg" alt="" width={450} height={150} />
                        <h1 className='font-medium mt-2'>CHUONG TRÌNH KHUYẾN MẠIBUILD PC TẶNG NGAY TIỀN MẶT</h1>
                        <p className='mb-5 pb-2 w-[500px] text-left'>Từ nay cho đến khi có thông báo mới</p>
                    </div>
                    <div className='border-b-2 mb-3 mt-3 w-[450px] text-left border-b-gray-200'>
                        <img src="../images/blog2.jpg" alt="" width={450} height={150} />
                        <h1 className='font-medium mt-2'>CHUONG TRÌNH KHUYẾN MẠIBUILD PC TẶNG NGAY TIỀN MẶT</h1>
                        <p className='mb-5 pb-2 w-[500px] text-left'>Màn hình ViewSonic VA3209U-2K là lựa chọn hoàn hảo cho những ai đang tìm kiếm một màn hình lớn, sắc nét và đa năng cho cả nhu cầu công việc và giải trí </p>
                    </div>
                    <div className='border-b-2  mb-3 w-[450px] text-left border-b-gray-200'>
                        <img src="../images/blog3.jpg" alt="" width={450} height={150} />
                        <h1 className='font-medium mt-2'>CHUONG TRÌNH KHUYẾN MẠIBUILD PC TẶNG NGAY TIỀN MẶT</h1>
                        <p className='mb-5 pb-2 w-[500px] text-left'>Màn hình ViewSonic VX2528 là một lựa chọn tuyệt vời cho những người đam mê công nghệ và game thủ chuyên nghiệp. Sản phẩm là một trong những lựa chọn màn gaming p/p trong khoảng 3 triệu đồng.</p>
                    </div>
                    <div className='border-b-2 mb-3 border-b-gray-200'>
                        <img src="../images/blog4.jpg" alt="" width={450} height={150} />
                        <h1 className='font-medium mt-2'>CHUONG TRÌNH KHUYẾN MẠIBUILD PC TẶNG NGAY TIỀN MẶT</h1>
                        <p className='mb-5 pb-2 w-[500px] text-left'>Danh sách màn hình chính hãng giá rẻ dưới 2 triệu đồng tại HACOM sẽ giúp cho anh em tối ưu thời gian tìm hiểu về tính năng và giá thành.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComentAndBlog
