import React from 'react';
import '../css/ActionHotline.css';

const ActionHotline = () => {
    return (
        <div className="relative inline-block hover-container">
            <h6 className="text-sm hover-trigger cursor-pointer">
                Gọi mua hàng: <b>1900.1903</b>
            </h6>
            <div className="absolute mt-2 bg-white border border-gray-300 shadow-lg hover-content custom-dropdown-width z-10">
                <ul className="list-none p-2">
                    <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                        <div className="flex items-center">
                            <span className="font-bold bg-red-700 text-white px-2 py-1 rounded">Line 1</span>
                            <span className="ml-2">Khách hàng Doanh nghiệp (8h-24h)</span>
                        </div>
                    </li>
                    <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                        <div className="flex items-center">
                            <span className="font-bold bg-red-700 text-white px-2 py-1 rounded">Line 2</span>
                            <span className="ml-2">Khách hàng Cá nhân (8h-22h)</span>
                        </div>
                    </li>
                    <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                        <div className="flex items-center">
                            <span className="font-bold bg-red-700 text-white px-2 py-1 rounded">Line 3</span>
                            <span className="ml-2">Hỗ trợ kỹ thuật (24/7)</span>
                        </div>
                    </li>
                    <li className="p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-100 transition">
                        <div className="flex items-center">
                            <span className="font-bold bg-red-700 text-white px-2 py-1 rounded">Line 4</span>
                            <span className="ml-2">Tư vấn dịch vụ (8h-20h)</span>
                        </div>
                    </li>
                    <li className="p-2 cursor-pointer hover:bg-gray-100 transition">
                        <div className="flex items-center">
                            <span className="font-bold bg-red-700 text-white px-2 py-1 rounded">Line 5</span>
                            <span className="ml-2">Chăm sóc khách hàng (24/7)</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ActionHotline;
