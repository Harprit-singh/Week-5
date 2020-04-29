const a = 5
const b = 'Happy'
function addTwoNumbers(x, y){
    return x+y
}

console.log('kaur')

console.log(addTwoNumbers(4, 3))

const add = function(a, b) {
    return a+b
}
// otherFunc(function (x, y){........})

function Myfunc() {
    anotherFunc() // ok, anotherFunc is hoisted
    function anotherFunc(){
        return console.log('Hello')
    }
}

var arr = [1, 2, 3, 4, 5, ]

console.log(arr) 

console.log(arr[0])

console.log(arr[3])

arr[3] = "x"
console.log(arr)

console.log(arr.length)

const arr1 = ['Name', 'lastName']

console.log(arr1.length)

console.log(1 in arr)

console.log(6 in arr)

var exampleArrray = []

exampleArrray.test = 111
console.log(exampleArrray.test)

console.log(arr.slice(1, 2))
console.log(arr)

const names = ['happy', 'sabby', 'jassi', 'john cena']
console.log(names.slice(2, 4))

console.log(names.pop())

console.log(names.push('newzealand'))
console.log(names)

//merge two arrays arr and name 

console.log(arr.concat(names))

names.forEach(name => console.log(name))

const firstValue = names.shift()
console.log(firstValue)
console.log(names)

console.log(names.unshift('jasleen'))
console.log(names)

const MMM = names.reverse()
console.log(names)

console.log(names.indexOf('sabby'))

console.log(names.join('-'))

console.log(arr.join())

// map() reduce() splice()