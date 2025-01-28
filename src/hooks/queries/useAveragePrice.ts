import { getAveragePrice } from '@/app/api/getAvgPrice';
import { useQuery } from '@tanstack/react-query';

export const useAveragePrice = () => {
    return useQuery({
        queryKey: ['averagePrice'],
        queryFn: getAveragePrice
    });
};
