import React from 'react';

const StatusBadge = ({ status, variant = 'success' }) => {
  const variantStyles = {
    success: 'bg-green-100 text-green-800 border border-green-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    danger: 'bg-red-100 text-red-800 border border-red-300',
    info: 'bg-blue-100 text-blue-800 border border-blue-300',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variantStyles[variant]}`}>
      ● {status}
    </span>
  );
};

export default StatusBadge;
