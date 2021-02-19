const getUsers = (url) => {
	return 
		new Promise(function(resolve, reject) {
		let req = new XMLHttpRequest()
		req.open('GET', url)

		req.onload = () => {
			if(req.readyState === 4){
				if(req.status === 200){
					resolve(JSON.parse(req.response))
				}else if(req.status === 404){
					reject(Error(req.status))
				}
			}
		}

		req.onerror = () =>{
			reject(Error("Network error"))
		}

		req.send()
	})
} 


getUsers('http://localhost:5000/api/users')
.then((response) => {
	console.log(response)
}, (err) => console.log('Fetch data error : ',err))
