// const userRole = (type) => {

//     switch (type) {


//         case 'admin':
//             return "admin user"

//         case 'subAdmin':
//             return "sub admin user"

//         default:
//             return "user role not found"

//     }

// }


const userRole = (type) => {

    if (type == "admin") {
        return "admin user"
    }

    else if (type == "subAdmin") {
        return "sub admin user"
    }
    else {
        return "user role not found"
    }

}