const tail = function(queue) {
  let result = []
  if(queue.length < 2) return result;
  for (let i = 1; i < queue.length; i++) {
    result.push(queue[i]);
    assertEqual(result[i-1], queue[i])
  }
  return result;
};

module.exports = tail;
