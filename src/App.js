import * as React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ProdList from './pages/ProductList.page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailPage from './pages/ProductDetail.page';

// Create a client
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProdList" component={ProdList} />
          <Stack.Screen
            name="ProductDetailPage"
            component={ProductDetailPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
