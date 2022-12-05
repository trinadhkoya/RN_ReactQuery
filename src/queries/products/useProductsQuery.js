import {useQuery} from '@tanstack/react-query';
import {getAllProducts} from '../../servcies/product.service';

function useProductsQuery() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
}
export default useProductsQuery;
