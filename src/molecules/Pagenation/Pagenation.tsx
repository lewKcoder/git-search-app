import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { RepositoriesResponseType } from "../../features/types/repositoriesResponse";

interface ListProps {
  items: RepositoriesResponseType[];
  setCurrentItems: (param: RepositoriesResponseType[]) => void;
}

export const Pagenation: FC<ListProps> = ({ items, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage: number = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {items.length > 0 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName="patination"
        />
      )}
    </>
  );
};
