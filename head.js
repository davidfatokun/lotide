const assertEqual = require('./assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(queue) {
  if (queue.length === 0) {
    return undefined;
  } else {
  return queue[0];
  }
};

module.exports = head;
