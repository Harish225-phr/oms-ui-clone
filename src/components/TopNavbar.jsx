import React from 'react';
import {
  Search,
  Bell,
  Settings,
  User,
  Menu,
} from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between h-16 shadow-sm">
      {/* Left side - Menu and Search */}
      <div className="flex items-center space-x-4 flex-1">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
          <Menu size={20} className="text-gray-600" />
        </button>

        {/* Search bar */}
        <div className="relative ml-4">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search orders, materials, customers..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-sm w-80"
          />
        </div>
      </div>

      {/* Right side - Icons and User */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
          <Settings size={20} className="text-gray-600" />
        </button>

        {/* User Avatar */}
        <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
          <div className="flex flex-col items-end">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
            JD
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
