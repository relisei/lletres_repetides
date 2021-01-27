const myArray = ["A", "L", "E", "J", "A", "N", "D", "R", "O"];

mapStr = new Map;
for(let i = 0; i<myArray.length; i++){
    let item = parseInt(mapStr.get(myArray[i]))
    // console.log(item)
    if(item>=1){
        // console.log(item)
        mapStr.set(myArray[i], item+=1)
    }else{
        mapStr.set(myArray[i],1)
    }
}
console.log(mapStr)
