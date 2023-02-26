function Pagination(props) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 auto 35px auto",
        width: "300px"
      }}
    >
      {props.pagesArray.map((p) => (
        <button
          onClick={() => props.changePage(p)}
          key={p}
          className={props.page === p ? "page__current" : ""}
        >
          {p}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
