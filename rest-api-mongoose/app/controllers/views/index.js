export const HomePage = (req, res) => {
	const data = {
		title: 'Users List',
		header: 'User List Page',
		welcome: 'Daftar User',
		footer: `Copyright@${new Date().getFullYear()}`
	}
	res.render('pages/home', data)
}