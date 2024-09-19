import React from 'react';
import TabComponent from 'components/LandingPage/faltu';// Adjust path as needed

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tabs Example in Next.js</h1>
      <TabComponent />
    </div>
  );
};

export default HomePage;