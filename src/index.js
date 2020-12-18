let fn = async(num) => {
    await (num + 2)
    const sym = Symbol()
    console.log('sym is', sym)
    Array.from('1a2b3c')
    ;[1, 2, 3].filter(e => e > 1)
}

fn()
