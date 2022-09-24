import React from 'react';
import { MantineProvider } from '@mantine/core';
import Mainlayout from './pages/mainlayout';

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // Override any other properties from default theme
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
    >
      <Mainlayout />
    </MantineProvider>
  );
}

export default App;
