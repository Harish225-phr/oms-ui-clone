import React from 'react';
import { FileText } from 'lucide-react';

const CustomerDetailsSection = () => {
  const detailsSection1 = [
    { label: 'Customer Reference', value: 'OD-1591' },
    { label: 'Requested Delivery Date', value: '12th, Feb 2026' },
  ];

  const detailsSection2 = [
    { label: 'Order Created Date', value: '31th, Jan 2026' },
    { label: 'Sold to', value: 'Ahadiyan Enterprises' },
  ];

  const detailsSection3 = [
    { label: 'Billing Address', value: 'Ahadiyan Enterprises, 400079' },
    { label: 'Remarks', value: '--' },
  ];

  const detailsSection4 = [
    { label: 'Shipping Address', value: 'India, North-East, Tripura, Dholai, Aridhari, 400512' },
  ];

  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Customer Detail</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
          <FileText size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* First column */}
        <div className="space-y-6">
          {detailsSection1.map((item, index) => (
            <div key={index}>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Second column */}
        <div className="space-y-6">
          {detailsSection2.map((item, index) => (
            <div key={index}>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom sections */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          {detailsSection3.map((item, index) => (
            <div key={index}>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {detailsSection4.map((item, index) => (
            <div key={index}>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsSection;
