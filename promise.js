console.log("Before creating the Promise");
let promise = new Promise((resolve, reject) => {
  console.log("Inside the Promise constructor");
  resolve("Resolved value");
});


promise.
then(res => console.log("resolved",res))
.catch(ex => console.log("Exception",ex))

console.log("After creating the Promise");