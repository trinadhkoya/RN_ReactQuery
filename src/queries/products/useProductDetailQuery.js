import {useQuery} from '@tanstack/react-query';
import {getSingle} from '../../servcies/product.service';

function useProdDetailQuery(id) {
  return useQuery({
    queryKey: ['products', id],
    queryFn: getSingle(id),
  });
}
export default useProdDetailQuery;
