function towerBuilder(nFloors) {
  var extraSpaces = 2
  var result = []
  if(nFloors === 0) {
    return []
  }
  for(let i=1;i<=nFloors;i++) {
    if(i === 1) {
      result.push('*')
    }
    else {
      result.push('*'.repeat(i+i-1))
      }
    }
  for(let j=result.length-1;j>=0;j--) {
    if(j===result.length-1) {
    result[j] = result[j]

    }
    else if(j===result.length-2) {
    result[j] = ' '+result[j]+' '
    }
    else {
    result[j] = ' '.repeat(extraSpaces)+result[j]+' '.repeat(extraSpaces)
    extraSpaces++
  }
}
console.log(result)
}

towerBuilder(60)
