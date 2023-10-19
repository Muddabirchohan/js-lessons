let arr = [
    {
        name: "saad",
        age: "5",
        category: "kid"
    },
    {
        name: "ali",
        age: "22",
        category: "adult"
    },

    {
        name: "ahmed",
        age: "32",
        category: "kid"
    }
]

console.log("gd", Object.groupBy(arr, (data) => data.category ))

// const gd = {}
// const groupData = (arr) => {

//     arr.forEach(item => {

//         const groupField = item.category;

//         if (gd[groupField]) {
//             gd[groupField].push(item)
//         } else {
//             gd[groupField] = [item]
//         }

//         console.log("gd ",gd)


//     })


// }

// groupData(arr)





