export const getAllData = () => {
	const SampleData = [
		{id: 1, judul: "Tetralogy Buru", penulis: "Pramoedya Ananta Toer", genre: "Roman History", penerbit: "Hasta Mitra"},
		{id: 2, judul: "Pemrograman Web NodeJS", penulis: "Budi Rahardjo", penerbit: "Balai Pustaka"},
		{id: 3, judul: "Dibawah lindungan Al Quran", penulis: "Sayyid Qutb", genre: "Religi",  penerbit: ""},
		{id:4, judul: "Tenggelamnya kapal van der wijck", penulis: "Hamka", genre: "Roman", penerbit: "Gramedia"}
	]

	return SampleData
}


export const getDataById = (id) => {
	const Data = getAllData().find(d => d.id == id)
		return (!Data) ? [{message: `Id : ${id}, Data buku tidak tersedia`}] : Data
}
