



const requestWrapper = async () => {

if(navigator.onLine) throw Error("no connectivity") 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1s')
        console.log("Res", response)
    } catch (e) {
        console.log("Excep", e)
    }

}


// requestWrapper()
