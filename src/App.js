import React from 'react';
import { MantineProvider } from '@mantine/core';
import AppRoutes from './routes/route';

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
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
