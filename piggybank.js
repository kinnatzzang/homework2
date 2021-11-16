
function piggySave(){

    let total = 0

    return function add(money) {
        total += money
        console.log(total)
    }

}

const p1 = piggySave()

p1(100)
p1(100)
p1(100)

console.log('---------')


const p2 = piggySave()

p2(10000)
p2(20000)
p2(30000)