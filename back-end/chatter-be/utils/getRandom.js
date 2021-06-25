const getRandom = () => {
  let min = Math.ceil(1);
  let max = Math.floor(11);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = getRandom;