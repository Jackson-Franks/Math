let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let result = document.getElementById('result')
let number = document.getElementById('number')



minus.addEventListener('click', e => {
    result.value = result.value - number.value
})

plus.addEventListener('click', e => {
    result.value = parseInt(result.value) + 1*(number.value)

    console.log(number.value)
})