import { useState, useEffect, useRef } from 'react'


const usePage = (fetchApi) => {
  const [page, setPage] = useState(1); // 初始页码为: 1
  const [list, setList] = useState([]); // 初始列表数据为空数组: []

  useEffect(() => {
    fetchApi({ page }).then(setList);
  }, [page]); // 当page变更时，触发effect

  const prevPage = () => setPage(currentPage => currentPage - 1);
  const nextPage = () => setPage(currentPage => currentPage + 1);

  return [list, { page }, { prevPage, nextPage }];
};

export default usePage