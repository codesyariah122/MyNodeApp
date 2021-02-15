const username = () => {
    let user = prompt('Username : ')
    let jawab = (user == user) ? `Halo, ${user}` : 'Login Failed'
    console.log(jawab)
}
export { username }
// export function add(a, b) {
//     let n = a + b
//     return `${a} + ${b} = ${n}`
// }
// export function dist(a, b) {
//     let n = a - b
//     return `${a} - ${b} = ${n}`
// }

// const sayHai = (string) => {
//     console.log(`halo, ${string}`)
// }
// const agogo = (string) => {
//     console.log(string)
// }
// const halo = (user) => {
//     return user
// }
// export { sayHai, agogo, halo }