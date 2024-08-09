import React, { useState } from 'react';

const ActionHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    const handleSubMenuMouseEnter = (index: number) => setSubMenuOpen(index);
    const handleSubMenuMouseLeave = () => setSubMenuOpen(null);

    return (
        <div
            className="relative inline-block z-auto" // Thêm z-50 ở đây
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="flex items-center space-x-1 border border-gray-300 p-2 font-bold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <h6>Danh Mục</h6>
            </div>

            {isOpen && (
                <div
                    className="absolute bg-white shadow-lg left-0 top-full mt-1 z-40"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="px-4 py-2 w-64">
                        {/* Sản phẩm 1 */}
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 1 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sản phẩm 2 */}
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 2 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sản phẩm 3 */}
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 3 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sản phẩm 4 */}
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 10 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 4 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 5 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 6 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 7 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 8 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="hover:bg-gray-100 px-4 py-2 cursor-pointer relative"
                            onMouseEnter={() => handleSubMenuMouseEnter(1)}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <span>Laptop , Macbook , Surface</span>
                            {subMenuOpen === 9 && (
                                <div className="absolute bg-white shadow-lg left-full top-0 mt-0 z-40"> {/* Thêm z-40 */}
                                    <div className="px-4 py-2 w-[1050px]">
                                        <div className='flex justify-between'>
                                            <div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='ml-2 flex space-x-8 mb-6'>
                                                    <div>
                                                        <p className='text-red-600'>Laptop Theo Hãng</p>
                                                        <p>Laptop Acer</p>
                                                        <p>Laptop Asus</p>
                                                        <p>Laptop Dell</p>
                                                        <p>Laptop HP</p>
                                                        <p>Laptop Lenovo</p>
                                                        <p>Laptop LG</p>
                                                        <p>Laptop MSI</p>
                                                        <p>Laptop Apple</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-red-600' >Laptop Theo Nhu Cầu</p>
                                                        <p>Laptop Văn Phòng</p>
                                                        <p>Laptop Học Tập</p>
                                                        <p>Laptop Gaming</p>
                                                        <p>Laptop Đồ Họa</p>
                                                        <p>Laptop Cao Cấp</p>
                                                        <p>Laptop Doanh Nghiệp</p>
                                                        <p>Phổ Thông , Văn Phòng</p>
                                                        <p>Laptop Cảm Ứng</p>
                                                    </div>
                                                </div>
                                                <div className='flex space-x-3'>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                    <div className='flex border border-gray-400 w-52 justify-center p-2 rounded-xl'>
                                                        <div>
                                                            <h3>LAPTOP Văn Phòng</h3>
                                                            <p>Chỉ từ : 8.999.000đ</p>
                                                        </div>
                                                        <img src="../images/acer.png" alt="" width={50} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div >
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>
                                                <div className='flex space-x-3 mb-2 justify-end'>
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                    <img src="../images/acer.png" alt="" width={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionHeader;
