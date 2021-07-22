function partsSums(ls) {
    const result = [];
 
    let totalSum = ls.reduce((acc, el) => acc + el, 0);
 
    for (let i = 0; i <= ls.length; i++) {
     result.push(totalSum);
 
     totalSum -= ls[i];
    }
 
    return result;
 }