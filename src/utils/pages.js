function getPageCount(totalCount, limit) {
  return Math.ceil(totalCount / limit);
}

function GetPagesArray(resTotal) {
  let pagesArray = [];
  for (let i = 0; i < resTotal; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
}

export default [getPageCount, GetPagesArray];
