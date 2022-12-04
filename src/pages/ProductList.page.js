import React from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getAllProducts} from '../servcies/product.service';
import ProductItem from '../components/ProductItem';

function ProdList(props) {
  // Queries
  const query = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: 30000,
    cacheTime: 300000,
  });

  if (query.isLoading || query.isFetching) {
    return <ActivityIndicator />;
  }

  const navigateToDetail = item => {
    props.navigation.navigate('ProductDetailPage', {id: item.id});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetail(item)}>
        <ProductItem item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal={false}
      data={query?.data?.products}
      renderItem={renderItem}
    />
  );
}
export default ProdList;
