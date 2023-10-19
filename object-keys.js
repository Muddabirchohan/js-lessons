const data = {
    name: "chohan",
    age: 26,
    gender: "male",
    designation: "consultant"
}



// **   Object KEYS  **

//lets try with a for in loop
// let list =[]
// for(const item in data){
//     list.push(item)
// }

// //console the final array
// console.log("item",list)


//one liner solution with built in method
// console.log(Object.keys(data))

// **   Object KEYS  **






// **   Object VALUES  **
// lets try with a for in loop
let list =[]
for(const item in data){
    console.log("value",data[item])
}

//console the final array
// console.log("item",list)

// one liner solution with built in method
// console.log(Object.values(data))