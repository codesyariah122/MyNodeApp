// import { sayHai, sayBye } from './lib/module.mjs'
// sayHai("PujiErmanto")
import { KeyUp } from './lib/module.mjs'

let nama = document.querySelector('#nama')
let user = document.getElementById('user')
KeyUp(nama, user)

// nama.addEventListener('keyup', function (e) {
//     user.innerHTML = e.target.value;
// })
