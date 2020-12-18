let fn = async(num) => {
    console.log('promise', Promise.resolve('xxx'))
    console.log('async/await', await (num + 2))
    console.log('Symbol', Symbol())
    console.log('Array.from', Array.from('1a2b3c'))
    console.log('Array.prototype.filter', [1, 2, 3].filter(e => e > 1))
}

fn(98)
