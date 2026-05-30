import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

const TimelinePanel = () => {
  const events = [
    {
      id: 1,
      title: 'In progress',
      subtitle: 'PQ-1120',
      description: 'Production Order Created',
      timestamp: '31th, Jan 2026 | 11:10 am',
      status: 'in-progress',
    },
    {
      id: 2,
      title: 'In progress',
      subtitle: 'SO-1754',
      description: 'Sales Order Created',
      timestamp: '31th, Jan 2026 | 11:00 am',
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'In progress',
      subtitle: 'STO-1250',
      description: 'Stock Transfer Order Created',
      timestamp: '31th, Jan 2026 | 10:40 am',
      status: 'in-progress',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'in-progress':
        return <Clock size={16} className="text-orange-500" />;
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'warning':
        return <AlertCircle size={16} className="text-yellow-500" />;
      default:
        return <Clock size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="w-64 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Timeline</h3>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {/* Timeline line */}
            {index < events.length - 1 && (
              <div className="absolute left-2 top-8 w-0.5 h-16 bg-gray-300"></div>
            )}

            {/* Timeline dot */}
            <div className="flex items-start space-x-3">
              <div className="mt-1 p-1.5 bg-gray-100 rounded-full">
                {getStatusIcon(event.status)}
              </div>

              {/* Event content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{event.title}</p>
                <p className="text-xs font-medium text-primary mt-0.5">{event.subtitle}</p>
                <p className="text-xs text-gray-600 mt-1">{event.description}</p>
                <p className="text-xs text-gray-500 mt-2">{event.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePanel;
