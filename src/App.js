import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import ProdList from './pages/ProductList.page';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProdList />
    </QueryClientProvider>
  );
}

export default App;
