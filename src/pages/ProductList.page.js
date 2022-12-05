import React from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import ProductItem from '../components/ProductItem';
import useProductsQuery from '../queries/products/useProductsQuery';

function ProdList(props) {

  const query = useProductsQuery();

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
