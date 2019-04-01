/// Cancel timer example

const timerId =  setInterval(() => console.log('You will see this message only twice'),
    3000
);

console.log("before we going to cancel the timer");
setTimeout(()=> {
    console.log('waiting for 5 sec')
    clearTimeout(timerId);
},7000);

// printout will be:
//
//      before we going to cancel the timer
//      You will see this message only twice
//      waiting for 5 sec
