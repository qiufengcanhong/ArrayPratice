'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let arr = [];
  arr = collection_a.filter((element) => {
      if (collection_b.indexOf(element)!=-1) {
        return false;
      }
      return true;
    }
  )
  return arr;
}

module.exports = choose_no_common_elements;
