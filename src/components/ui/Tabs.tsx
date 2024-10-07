"use client"
import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode; 
}

interface TabsProps {
  tabs: Tab[]; 
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs,className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className='p-4'>
      <div className={`flex space-x-4 ${className}`}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`py-2 px-4 ${activeTab === tab.label ? 'bg-primary text-white font-bold rounded-sm' : ' text-black'}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className='mt-4'>
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
