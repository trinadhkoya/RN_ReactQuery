import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getSingle} from '../servcies/product.service';
import ProductItem from '../components/ProductItem';

function ProductDetailPage(props) {
  const prodId = props.route.params.id;
  const query = useQuery({
    queryKey: ['products', prodId],
    queryFn: () => getSingle(prodId),
  });

  if (query.isLoading || query.isFetching) {
    return <ActivityIndicator />;
  }

  return <ProductItem item={query?.data} />;
}

export default ProductDetailPage;
