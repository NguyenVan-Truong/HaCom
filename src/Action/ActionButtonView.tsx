import React, { useState } from 'react';

const ToggleButtons: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            {isExpanded ? (
                <div>
                    <ul>
                        <li className="custom-list-item mb-2">
                            Màu: Đen
                        </li>
                        <li className="custom-list-item mb-2">
                            OS: Windows 11 Home
                        </li>
                    </ul>
                    <button
                        className='flex items-center space-x-2 bg-custom-gray px-4 py-2 rounded-md'
                        onClick={() => setIsExpanded(false)}
                    >
                        <span className='flex-grow text-center'>Thu Lại</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>

                        </div>
                    </button>
                </div>
            ) : (
                <button
                    className='flex items-center space-x-2 bg-custom-gray px-4 py-2 rounded-md'
                    onClick={() => setIsExpanded(true)}
                >
                    <span className='flex-grow text-center'>Xem đầy đủ</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </button>
            )}
        </div>
    );
};

export default ToggleButtons;
