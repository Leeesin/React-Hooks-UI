import React from 'react';
import Page from "./components/page/page.jsx";

const ajax = function () {
  return new Promise((resolve, reject) => {
    resolve([
      { name: '张三', age: 18 },
      { name: '王五', age: 23 },
    ])
  })
}

const currentPage = 1
const total = 10
const size = 10

const onChange = function (page) {
  alert(page)
}



function App() {
  return (
    <Page currentPage={currentPage} total={total} size={size} onChange={onChange} ></Page>
  );
}


export default App;
