import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function InfiniteQuery() {
  // Modified to accept an object with pageParam
  const fetchData = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:3001/items?_limit=5&_page=${pageParam}`);
};

const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => {
        // Check if there are more items to fetch
        if (lastPage.data.length === 0) {
            return undefined;
        }
        return allPages.length + 1;
    },
    initialPageParam: 1,
});

if (isLoading) return <h3>Page is Loading..</h3>;
if (error) return <h3>Getting error: {error.message}</h3>;

return (
    <div className='container'>
        <h3>Infinite Load</h3>
        <div className="items">
            {data?.pages.map((page) =>
                page.data.map((item) => (
                    <div key={item.id} className='item'>{item.name}</div>
                ))
            )}
        </div>
        <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
        >
            {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load more' : 'No more items'}
        </button>
    </div>
);
}

export default InfiniteQuery