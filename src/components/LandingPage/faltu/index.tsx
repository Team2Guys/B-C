'use client'
import React, { useState } from 'react';

const TabComponent = () => {
  // Manage active tab state
  const [activeTab, setActiveTab] = useState(0);

  // Tab data (title and content for each tab)
  const tabs = [
    { title: 'Tab 1', content: 'This is the content for Tab 1' },
    { title: 'Tab 2', content: 'This is the content for Tab 2' },
    { title: 'Tab 3', content: 'This is the content for Tab 3' },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Tab Buttons */}
      <div className="flex space-x-4 border-b-2 pb-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg ${
              activeTab === index ? 'text-blue-600 border-b-2 border-blue-600' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 border rounded-md w-full">
        <p>{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default TabComponent;