const max = (...arr) => {
  const arrSorted = arr.sort((a,b)=>(a > b ? 1 : -1))
  if((arrSorted[0] < 0) && (arrSorted[1] < 0)){
    if(arrSorted[0] * arrSorted[1] * arrSorted[arrSorted.length - 1] > arrSorted[arrSorted.length - 1] * arrSorted[arrSorted.length - 2] * arrSorted[arrSorted.length - 3]){
      return `${arrSorted[0]}, ${arrSorted[1]}, ${arrSorted[arrSorted.length - 1]}`
    }
  }
  return `${arrSorted[arrSorted.length - 1]}, ${arrSorted[arrSorted.length - 2]}, ${arrSorted[arrSorted.length - 3]}`
}

console.log(max(3,4,5,6,7,8,9,1,123,0,-5,10,30,-40,-100))
