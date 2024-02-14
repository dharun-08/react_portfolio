// DKSpinner.js
import React from 'react';

const DKSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">DK</div>
                <div className="animate-spin rounded-full w-16 h-16 border-t-4 border-orange-500 border-solid"></div>
            </div>
        </div>
    );
};

export default DKSpinner;
