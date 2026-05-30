import React, { useState } from 'react';

const TabsSection = ({ activeTab = 'detail', onTabChange }) => {
  const tabs = [
    'Detail',
    'Offers & Coupon',
    'Module',
    'Stock Reservation',
    'Documents',
    'Info',
    'Comment',
    'Timeline',
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-6">
      <div className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange && onTabChange(tab.toLowerCase())}
            className={`py-4 px-2 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.toLowerCase()
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsSection;
