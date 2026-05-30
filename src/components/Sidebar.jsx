import React from 'react';
import {
  Home,
  FileText,
  BarChart3,
  Users,
  ShoppingCart,
  TrendingUp,
  Settings,
  HelpCircle,
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: FileText, label: 'Orders', active: true },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Users, label: 'Customers', active: false },
    { icon: ShoppingCart, label: 'Products', active: false },
    { icon: TrendingUp, label: 'Reports', active: false },
  ];

  return (
    <div className="w-20 bg-primary text-white flex flex-col items-center py-6 space-y-4 h-screen">
      {/* Logo */}
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-lg">
        A
      </div>

      {/* Menu items */}
      <div className="flex-1 flex flex-col items-center space-y-6 mt-8">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`p-3 rounded-lg transition-all ${
              item.active
                ? 'bg-white text-primary'
                : 'hover:bg-secondary text-white'
            }`}
          >
            <item.icon size={24} />
          </button>
        ))}
      </div>

      {/* Bottom items */}
      <div className="flex flex-col items-center space-y-4 pb-6">
        <button className="p-3 rounded-lg hover:bg-secondary transition-all">
          <HelpCircle size={24} />
        </button>
        <button className="p-3 rounded-lg hover:bg-secondary transition-all">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
