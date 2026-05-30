import React from 'react';

const OrderDetailsCard = () => {
  const details = [
    {
      label: 'Plant',
      value: '2800 - Mumbai Branch',
    },
    {
      label: 'Sales District',
      value: 'TY001 - Lakshmi_Mutherjee',
    },
    {
      label: 'Distribution Channel',
      value: '11 - Allsell_Dealer',
    },
    {
      label: 'Sales Organisation',
      value: 'ZMFG - ALPL MFG. SALE ORG.',
    },
    {
      label: 'Division',
      value: '11 - ALLWALL',
    },
    {
      label: 'Payment Term',
      value: '20%Advance and rest before dli',
    },
    {
      label: 'Incoterm',
      value: 'Delivered Duty Paid',
    },
  ];

  return (
    <div className="bg-white p-6 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Detail</h2>
      
      <div className="grid grid-cols-2 gap-8">
        {/* First column */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Plant
            </p>
            <p className="text-sm font-medium text-gray-900">2800 - Mumbai Branch</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Sales District
            </p>
            <p className="text-sm font-medium text-gray-900">TY001 - Lakshmi_Mutherjee</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Distribution Channel
            </p>
            <p className="text-sm font-medium text-gray-900">11 - Allsell_Dealer</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Incoterm
            </p>
            <p className="text-sm font-medium text-gray-900">Delivered Duty Paid</p>
          </div>
        </div>

        {/* Second column */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Sales Organisation
            </p>
            <p className="text-sm font-medium text-gray-900">ZMFG - ALPL MFG. SALE ORG.</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Division
            </p>
            <p className="text-sm font-medium text-gray-900">11 - ALLWALL</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Payment Term
            </p>
            <p className="text-sm font-medium text-gray-900">20%Advance and rest before dli</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
