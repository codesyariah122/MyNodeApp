let express = require('express');

let app = express();

app.get('/', function(req, res){

	let body = `
				<h2>Halaman Utama</h2>
				<a href="http://localhost:3000/katalog/123">Katalog</a>
				<a href="http://localhost:3000/kontak/456">Kontak</a>
				<a href="http://localhost:3000/tidak-di-kenal">Rute lain</a>
	`
	res.send(body);
});
app.get('/katalog/:idproduk', function(req, res){
	let body = '<h2>Halaman katalog</h2>'+
				'<p>Produk '+req.params.idproduk+'</p>';
	res.send(body);
})
app.get('/kontak/:idkontak', function(req, res){
	let body = '<h2>Halaman Kontak</h2>'+
				'<p>Kontak '+req.params.idkontak+'</p>';
	res.send(body);
});

app.get('*', function(req, res){
	res.send("<h2>404: Halaman tidak ditemukan</h2>");
});

app.listen(3000);