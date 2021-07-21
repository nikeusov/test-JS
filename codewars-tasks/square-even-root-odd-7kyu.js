const sumSquareEvenRootOdd = ns => {
  const result = ns.map(el => {
      return el % 2 ? Math.sqrt(el) : el ** 2;
  });

  return +result
        .reduce((acc, el) => acc + el)
        .toFixed(2);
};