'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((prev, next, index, self) => {
    return prev > next ? prev : next;
  })
}

module.exports = collect_max_number;
