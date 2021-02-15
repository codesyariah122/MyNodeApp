// 1. object literal
// let Mahasiswa = {
//     nama: 'Puji Ermanto',
//     energi: 10,
//     food: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         this.food = this.food - porsi;
//         console.log(`Halo , ${this.nama}, Selamat makan`)
//         console.log(`Sisa makanan : ${this.food}`)
//     }
// }

// 2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`)
//     }
//     this.main = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain !`)
//     }
//     return mahasiswa;
// }
// let pujiermanto = this('Puji Ermanto', 10);

// 3. constructor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`)
//     }
//     this.main = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain !`)
//     }
// }
// let puji = new Mahasiswa('Puji Ermanto', 10)

// 4. object.create
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan !`)
    },
    main: function (jam) {
        this.energi -= jam
        console.log(`Halo ${this.nama}, selamat bermain !`)
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur !`)
    }
}
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}
let puji = Mahasiswa('Puji Ermanto', 10);
let dody = Mahasiswa('Dody Sugianto', 10);