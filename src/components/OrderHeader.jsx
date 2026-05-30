import React from 'react';
import { Printer, RotateCcw, ChevronDown } from 'lucide-react';
import StatusBadge from './StatusBadge';

const OrderHeader = () => {
  return (
    <div className="px-6 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">OD-1591</h1>
        </div>
        <StatusBadge status="In Process" />
      </div>

      <div className="flex items-center space-x-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
          <Printer size={20} className="text-gray-600" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
          <RotateCcw size={20} className="text-gray-600" />
        </button>

        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm font-medium text-gray-700 bg-white cursor-pointer">
          <option value="in-process">Status</option>
          <option value="pending">Pending</option>
          <option value="in-process">In Process</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-900 transition-all font-medium text-sm flex items-center space-x-2">
          <span>Action</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default OrderHeader;
