import React from 'react';
import AppProvider from "./provider/AppProvider.tsx";
import RouterProvider from "./routes/RouterProvider.tsx";

function App(): React.JSX.Element {
  return (
      <AppProvider>
          <RouterProvider/>
      </AppProvider>
  );
}

export default App;
