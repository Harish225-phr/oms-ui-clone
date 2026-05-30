import React from 'react';
import { AlertCircle } from 'lucide-react';

const OrderBreakdownTable = () => {
  const items = [
    {
      id: 1,
      material: 'AL33R-TR75-2440mmx1220mm',
      requestedQty: '10',
      scheduledQty: '10',
      confirmedQty: '--',
      extraQty: '--',
      uom: 'Pieces',
      timestamp: '31th, Jan 2026\n10:20 am',
      status: 'Pending',
    },
    {
      id: 2,
      material: 'Hi-Paint-SDP_AD52_Test',
      requestedQty: '04',
      scheduledQty: '04',
      confirmedQty: '--',
      extraQty: '--',
      uom: 'Liter',
      timestamp: '31th, Jan 2026\n11:00 am',
      status: 'Pending',
    },
  ];

  return (
    <div className="bg-white p-6 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Breakdown</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left font-medium text-gray-700">Material</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Requested quantity</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Scheduled quantity</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Confirmed quality</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Extra quantity</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">UOM</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Timestamp</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="font-medium text-gray-900">{item.material}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-700">{item.requestedQty}</td>
                <td className="px-4 py-4 text-gray-700">{item.scheduledQty}</td>
                <td className="px-4 py-4 text-gray-700">{item.confirmedQty}</td>
                <td className="px-4 py-4 text-gray-700">{item.extraQty}</td>
                <td className="px-4 py-4 text-gray-700">{item.uom}</td>
                <td className="px-4 py-4 text-gray-700 whitespace-pre">{item.timestamp}</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBreakdownTable;
