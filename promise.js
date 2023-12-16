console.log("Before creating the Promise");
let promise1 = new Promise((resolve, reject) => {
    console.log("Inside the Promise constructor");
    // Simulate a rejection
    reject("Rejected value 1");
});

let promise2 = new Promise((resolve, reject) => {
    console.log("Inside the Promise constructor");
    resolve("Resolved value 2");
});



// const asynCalls = async () => {
//     try {
//         const res1 = await promise1;
//         const res2 = await promise2;
//         console.log("promise resolve 1", res1, "promise resolved 2", res2);

//     } catch (e) {
//         console.log("Error:", e);
//     }

// }

// asynCalls()

const results = Promise.allSettled([promise1,promise2]).then(res => console.log("res",res))



console.log("Results: ",results)


// try {
//     const res1 = await promise1;
//     const res2 = await promise2;
//     console.log("promise resolve 1", res1, "promise resolved 2", res2);
// } catch (e) {
//     console.log("Error:", e);
// }

console.log("After creating the Promise");