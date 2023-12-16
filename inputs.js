
const inputs = document.querySelectorAll("input[name^=otp]");
let loader = false




function setCopiedValues(valueArray) {

    valueArray.forEach((element, index) => {
        document.querySelector(`input[name=otp-${index + 1}]`).value = element
    });

    const focus = () => {
        let len = valueArray.length;

        return valueArray.length == 4 ?
            document.querySelector(`input[name=otp-${len}]`).focus() :
            document.querySelector(`input[name=otp-${len}]`).nextElementSibling.focus()
    }

    //focus change 
    setTimeout(() => {
        focus()
    }, 0)
}


function focusedColor(target, color) {
    color ? target.style.border = `2px solid ${color}` : target.style.border = 'none'
}


function setValue(e) {

    const { name, value } = e.target
    const fieldIndex = name.split("-")[1]
    const valueArray = value.split("");

    if (!value) return

    if (valueArray.length > 1) {
        setCopiedValues(valueArray)
    }

    //donot change focus ahead if last elemet 
    if (e.target.value && fieldIndex < 4) {
        e.target.nextElementSibling.focus()
        return
    }

    //donot change focus if first elemet 
    if (e.inputType == "deleteContentBackward" && fieldIndex > 1) {
        e.target.previousElementSibling.focus()

        return
    }

    if (fieldIndex == 4) {
        let p = document.createElement('div')
        p.className = "boxLoading"

        const inputs = document.querySelectorAll("input[name^=otp]");
        if (Array.from(inputs).every(item => item.value !== "")) {
            document.getElementsByClassName('boxLoading').length == 0 && 
            document.getElementsByClassName("parentOtp")[0].appendChild(p)
            setTimeout(()=>{
                document.getElementsByClassName("parentOtp")[0].removeChild(p)
            },2000)
          
        }

    }



}


function handleKeyDown(e) {


    if (e.target.value == "" && e.code == "Tab") {
        e.preventDefault()
        return
    }

    if (e.target.value == "" && e.code == "Backspace") {
        e.target.previousElementSibling.focus()
        return
    }

}




Array.from(inputs).map(item => {

    item.addEventListener("input", setValue)
    item.addEventListener("keydown", handleKeyDown)

})

