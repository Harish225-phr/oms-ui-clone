import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const breadcrumbs = [
    { label: 'Dashboard', href: '#' },
    { label: 'Production order', href: '#' },
    { label: 'ODH-1001', href: '#' },
    { label: 'OD-1591', href: '#', active: true },
  ];

  return (
    <div className="px-6 py-3 bg-white border-b border-gray-200 flex items-center space-x-2 text-sm">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={16} className="text-gray-400" />}
          <a
            href={breadcrumb.href}
            className={`transition-colors ${
              breadcrumb.active
                ? 'text-gray-900 font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {breadcrumb.label}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
