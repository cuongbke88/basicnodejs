console.log('Hello all Word')
const a="ongba"
console.log(a)
const b={
    fistName:"cao",
    lasNam:"cuong",
    age: 25
}

if (b.age == 25) {console.log(b)} else if(b.age == 26){console.log("true")}
function doctuoi(obj) {
    switch (obj.age) {
        case 25:
            console.log("hai nam")
                break;
        case 26:
            console.log("hai sau")
                break;
    
        default:
            console.log("khong biet")
            break;
    }
}
function showobject(bb) {
    console.log(bb)
}

const arr = ["hihi",1,2,3];
showobject(arr[1])
for (let index = 0; index < arr.length; index++) {
    showobject(arr[index]);
    
}
let num1=5
let num2=6
num1^=num2^=num1^=num2
console.log(num1)
console.log(num2)
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world! </h3>');
    res.write('<h2>CMC </h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.JS server is running on port: 3000');
})
