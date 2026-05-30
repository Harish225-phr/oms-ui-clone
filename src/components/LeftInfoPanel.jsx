import React from 'react';

const LeftInfoPanel = () => {
  const infoItems = [
    {
      label: 'Order number',
      value: 'OD-1591',
    },
    {
      label: 'Material',
      value: 'AL3C-AD01',
    },
    {
      label: 'Total quality',
      value: '1 N',
    },
    {
      label: 'Sales organisation',
      value: 'ZMFG - ALPL MFG. SALE ORG.',
    },
    {
      label: 'Sales Document Type',
      value: 'ZTSR - Service Sale W Matter',
    },
    {
      label: 'Delivery date',
      value: '12th, Feb 2026',
    },
    {
      label: 'Status',
      value: 'In Process',
      status: 'in-process',
    },
  ];

  return (
    <div className="w-64 bg-white p-6 border-r border-gray-200 space-y-6 max-h-screen overflow-y-auto">
      {infoItems.map((item, index) => (
        <div key={index}>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            {item.label}
          </p>
          {item.status === 'in-process' ? (
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium inline-block border border-green-300">
              ● {item.value}
            </div>
          ) : (
            <p className="text-sm font-medium text-gray-900 break-words">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftInfoPanel;
