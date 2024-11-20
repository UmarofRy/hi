let body = document.querySelector('body')
let btn = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

let a = () => {
    body.style.background = 'black'
    body.style.color = 'white'
    btn.style.color = 'white'
    btn.style.background = '#C4B5A5'
    btn2.style.color = 'white'
    btn2.style.background = '#FB982F'

}

let b = () => {
    body.style.background = '#C4B5A5'
    body.style.color = 'black'
    btn.style.color = 'black'
    btn.style.background = '#FB982F'
    btn2.style.color = 'white'
    btn2.style.background = 'black'
}