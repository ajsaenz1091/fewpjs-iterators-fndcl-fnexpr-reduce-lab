const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//* First function declaration
// function reducer(accu, item){
//     return accu += item;
// }

//* Second function declaration
const reducer = (acc,item) => {
    return acc += item;
}

//* First implementation of reduce with built-in callback function

// const totalBatteries = batteryBatches.reduce((accu, item) => {
//     return accu += item;
// }, 0);

//* Second implementation of reduce passing built-out callback function

 const totalBatteries = batteryBatches.reduce(reducer, 0);