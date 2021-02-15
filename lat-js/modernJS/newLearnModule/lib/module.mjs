// const sayHai = (user) => {
//     console.log(`Say hai , ${user}`)
// }

// const sayBye = (bye) => {
//     return bye
// }

// export { sayHai, sayBye }
function KeyUp(input, user) {
    input.addEventListener('keyup', function (e) {
        user.innerHTML = e.target.value;
        // input.hidden = true
    })
}
export { KeyUp }
