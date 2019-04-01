const func = () => {
    console.log("Hello after 4 second");
};

setTimeout(func, 4*1000);


setTimeout(() =>{
    console.log("Hello after 7 second");
},
    7*1000)