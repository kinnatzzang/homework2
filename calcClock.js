
//function calcTotal(hourValue, minValue){

    //시침의 각도를 구하는 함수 ===> 입력 시 12 출력 각도

    //function calcHour(hour) {

        //const result = (360 / 12) * (hour % 12)

        //return result


//분침의 각도를 구하는 함수
        //const calcMin = min => (360 / 60) * min


//분침에 시침의 이동 각도를 구하는 함수


            //function getExtra(min) {

            //const result = Math.abs(calcHour(hourValue) + getExtra(minValue) - calcMin(minValue))

            //return result > 180? 360 -result: result
        //}
//}

    //console.log(calcTotal(12,38))



//function getArtist() {
    //return ;
//}

//console.log(getArtist())


function calc(a, b, fn){
    console.log("A: " + a)
    console.log("B: " + b)

    const result = fn(a + 1,b + 1)

    return result
}

console.log(calc(10, 20, (x,y)
