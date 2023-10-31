

var mirror = function(str){
    console.log(str)
}

var capitalize = function(givenString){
    // let givenString = this;
    let firstChar = givenString.charAt(0).toUpperCase()
    let remainingString = givenString.slice(1)
    let final = firstChar + remainingString
    console.log(final)
    return final
}    

// str.capitalize()
// console.log(Object.getPrototypeOf(str))

var countWords = function(givenString){
    // let givenString = this;
    let words = givenString.split(" ");
    console.log(words.length)
    return words.length;
}


var maskEmail = function(givenString){
    // let givenString = this
    const emailParts = givenString.split('@')
    if(emailParts.length !== 2){
        throw new Error("Invalid Email")
    }
    const [name,domain] = emailParts
    const [provider, ending] = domain.split(".")

    const maskName = name.charAt(0) + "*".repeat(name.length-1)
    const maskDomain = domain.charAt(0) + "*".repeat(provider.length-1)
    
    const finalString = maskName + "@" + maskDomain + "." + ending
    console.log(finalString)
    return finalString
}

var readingTime = function(givenString){
    // let givenString = this
    let words = givenString.countWords()
    const wordPerMin = 200
    const minute = words/wordPerMin
    console.log("minutes",minute)
    return minute
}

export default capitalize
export {mirror,countWords}