


counter = 0;
const timer = setInterval(()=> {
    console.log('Hello World')
    counter ++;
    if (counter == 5){
        clearTimeout(timer);
        console.log('Done')
    }
},1000);
