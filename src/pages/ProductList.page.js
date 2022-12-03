import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getAllProducts} from '../servcies/product.service';
import ProductItem from '../components/ProductItem';

function ProdList() {
  // Queries
  const query = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (query.isLoading || query.isFetching) {
    return <ActivityIndicator />;
  }

  const renderItem = ({item}) => <ProductItem item={item} />;

  return (
    <FlatList
      horizontal={false}
      data={query?.data?.products}
      renderItem={renderItem}
    />
  );
}
export default ProdList;
