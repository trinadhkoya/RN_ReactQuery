import React from 'react';
import {ActivityIndicator} from 'react-native';
import ProductItem from '../components/ProductItem';
import useProductDetailQuery from '../queries/products/useProductDetailQuery';

function ProductDetailPage(props) {
  const prodId = props.route.params.id;
  const query = useProductDetailQuery(prodId);

  if (query.isLoading || query.isFetching) {
    return <ActivityIndicator />;
  }

  return <ProductItem item={query?.data} />;
}

export default ProductDetailPage;
