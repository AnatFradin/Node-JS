const theOneFunction = seconds =>{
    console.log('Hello after ' + seconds + ' seconds');
}

setTimeout(theOneFunction, 4*1000, 4);
setTimeout(theOneFunction, 8*1000, 8);
