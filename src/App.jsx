import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import Breadcrumb from './components/Breadcrumb';
import OrderHeader from './components/OrderHeader';
import TabsSection from './components/TabsSection';
import OrderDetailsCard from './components/OrderDetailsCard';
import OrderBreakdownTable from './components/OrderBreakdownTable';
import CustomerDetailsSection from './components/CustomerDetailsSection';
import TimelinePanel from './components/TimelinePanel';
import LeftInfoPanel from './components/LeftInfoPanel';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('detail');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar />

        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Order Header */}
        <OrderHeader />

        {/* Tabs */}
        <TabsSection activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content Area with Left Info Panel and Timeline */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Info Panel */}
          <LeftInfoPanel />

          {/* Center Content */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* Order Details */}
            <OrderDetailsCard />

            {/* Order Breakdown */}
            <OrderBreakdownTable />

            {/* Customer Details */}
            <CustomerDetailsSection />
          </div>

          {/* Right Timeline Panel */}
          <TimelinePanel />
        </div>
      </div>
    </div>
  );
}

export default App;
