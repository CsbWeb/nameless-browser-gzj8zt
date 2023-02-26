import React, { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Modal from "./components/UI/Modal/Modal";
import Loader from "./components/UI/Loader/Loader";
import FetchList from "./API/FetchList";
import getPageCount from "./utils/pages";
import Pagination from "./components/Pagination";
import "./styles.css";

function List() {
  const [list, setList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isListLoad, setIsListLoad] = useState(false);
  let pagesArray = getPageCount[1](totalPages);

  useEffect(() => {
    FetchData();
  }, [page]);

  function getForm(values) {
    setList([...list, values]);
  }

  function removeItem(item) {
    setList(list.filter((l) => l.id !== item.id));
  }

  async function FetchData() {
    setIsListLoad(true);
    const res = await FetchList.getAll(limit, page);
    setList(res.data);
    const totalCount = res.headers["x-total-count"];
    setTotalPages(getPageCount[0](totalCount, limit));
    setIsListLoad(false);
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <div>
      <Modal func={<Form send={getForm} />} />
      <h1 style={{ textAlign: "center" }}>Первый список</h1>
      {isListLoad ? (
        <Loader />
      ) : list.length !== 0 ? (
        <List list={list} postRem={removeItem} />
      ) : (
        <h2 style={{ textAlign: "center" }}>Список пуст!</h2>
      )}
      <Pagination changePage={changePage} page={page} pagesArray={pagesArray} />
    </div>
  );
}

export default List;
