// randomise un tableau
const shake = arr => {
  for (let position = arr.length - 1; position >= 1; position--) {
    let randomIndex = Math.floor(Math.random() * (position + 1));
    [arr[position], arr[randomIndex]] = [arr[randomIndex], arr[position]];
  }
  return arr;
};

// retire les valeur n.x  du tableau
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export { shake, reducedFilter, sleep };
