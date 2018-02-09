function produceDrivingRange(blockRange){
  return function(start, end){
    let s = start.slice(0, start.indexOf("t"));
    let e = end.slice(0, end.indexOf("t"));
    let diff = Math.abs(s-e);
    if(diff > blockRange){
      return `${diff - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - diff}`;
    }
  }
}

function produceTipCalculator(percentage){
  return function(bill){
    return bill * percentage;
  }
}

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
