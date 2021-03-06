import { useState, useMemo } from 'react';

const useTableSort = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (sortConfig.key === 'height' && Number(a[sortConfig.key]) && Number(b[sortConfig.key])) {
          if (sortConfig.direction === 'ascending') {
            return sortConfig.direction === 'ascending' ? a[sortConfig.key] - b[sortConfig.key] : b[sortConfig.key] - a[sortConfig.key];
          }
          if (sortConfig.direction === 'descending') {
            return sortConfig.direction === 'descending' ? b[sortConfig.key] - a[sortConfig.key] : a[sortConfig.key] - b[sortConfig.key];
          }

        } else {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);


  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort };
}

export default useTableSort