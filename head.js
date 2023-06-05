const head = function(queue) {
  if (queue.length === 0) {
    return undefined;
  } else {
  return queue[0];
  }
};

module.exports = head;
