import React, { useState } from 'react';

const ActionOnline = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const menuItems = [
        { text: 'Tùy chọn 1', value: 'option1' },
        { text: 'Tùy chọn 2', value: 'option2' },
        { text: 'Tùy chọn 3', value: 'option3' }
    ];

    return (
        <div className="flex space-x-4 mt-2">
            {['Mua Hàng Online', 'Miền Bắc', 'Miền Trung', 'Miền Nam'].map((text, index) => (
                <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex items-center space-x-1 bg-repeating-gradient p-2 rounded-3xl text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <h6 className="text-sm">{text}</h6>
                    </div>

                    {hoveredIndex === index && (
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            <ul className="py-1 text-gray-700">
                                {menuItems.map((item, idx) => (
                                    <li key={idx} className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ActionOnline;
