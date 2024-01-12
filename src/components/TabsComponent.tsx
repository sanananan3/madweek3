
import React, { useState } from 'react';
import { HeaderCounts } from '../utils/markdownUtils';

interface TabsComponentProps {
  counts: HeaderCounts;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ counts }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        {Array.from({ length: counts.h1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? 'active' : ''}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <h1>Content for Tab {activeTab + 1}</h1>
      </div>
    </div>
  );
};

export default TabsComponent;
