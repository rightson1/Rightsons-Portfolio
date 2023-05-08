import { useState, useEffect } from "react";
export const usePagination = (items, perPage,) => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(perPage);
    const totaltems = items?.length;

    useEffect(() => {
        setPage(1);
    }, [items]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = items?.slice(startIndex, endIndex)


    return { displayedItems, handlePageChange, page, totaltems, itemsPerPage }


}
