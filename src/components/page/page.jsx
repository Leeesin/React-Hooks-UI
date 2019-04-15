import React, { useState, useRef } from 'react'
import './page.scss';

import usePage from "../../hooks/usePage.js";


function Page({ currentPage = 1, total = 0, size = 1, onChange }) {

  console.log(currentPage);
  console.log(onChange);

  const pages = [1, 2, 3, 4]


  // const prevPage = () => setPage(currentPage => currentPage - 1);
  // const nextPage = () => setPage(currentPage => currentPage + 1);


  return (
    <div>
      {
        pages.map(item =>
          <span
            key={item}
            className={` ba_page-item item==current ? 'active' : '' `}
            onClick={_ => { onChange(item) }}>{item}
          </span>)
      }
    </div>


  )
}

export default Page