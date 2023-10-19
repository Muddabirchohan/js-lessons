// 
const data = {
    name: "chohan",
    age: 26,
    gender: "male",
    designation: "consultant"
}

//this becomes


// Object.entries(data).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//   });


console.log(
    Object.entries(data))