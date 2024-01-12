// src/App.tsx

import React, { useState, useEffect } from 'react';
import TabsComponent from '../components/TabsComponent';
import { countMarkdownHeaders, HeaderCounts } from '../utils/markdownUtils';

const App: React.FC = () => {
    const [headerCounts, setHeaderCounts] = useState<HeaderCounts>({ h1: 0, h2: 0, h3: 0 });

    useEffect(() => {
      fetch('/README.md')
        .then((response) => response.text())
        .then((text) => {
          setHeaderCounts(countMarkdownHeaders(text));
        });
    }, []);
  
    return <TabsComponent counts={headerCounts} />;
};

export default App;
