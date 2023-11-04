
let date = new Date(2020,1,14)

let formatter = new Intl.DateTimeFormat('en-US', {
    year: "numeric",
    month: 'long',
    day: 'numeric'
})

formatter.format(date)