function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result of asyncOperation1");
    }, 1000);
  });
}

function asyncOperation2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Result of asyncOperation2 using data: ${data}`);
    }, 1000);
  });
}



async function runAsyncOperations() {
    try {
      const result1 = await asyncOperation1();
      const result2 = await asyncOperation2(result1);
      console.log(result2); 
    } catch (error) {
      console.error(error);
    }
  }
  
  runAsyncOperations();