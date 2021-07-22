function arithmetic(a, b, operator){
    let obj = {add: (a + b), subtract: (a-b), multiply: (a * b), divide: (a/b)}
    
    return obj[operator];
  }