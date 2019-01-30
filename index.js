function iterativeLog(array) {
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate (callback) {
  var array = [`test`];
  array.forEach(callback);
  return array;

}
