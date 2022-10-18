var axios = require('axios');

export const salvarUsuario = (email:string, password:string) => {
	var data = JSON.stringify({
		"email": email,
		"password": password
	});
	
	var config = {
		method: 'post',
		url: 'http://localhost:8080/api/usuario/salvar',
		headers: { 
			'Content-Type': 'application/json'
		},
		data : data
	};

	axios.request(config).then(function (response: { data: any; }) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error: any) {
		console.log(error);
	});
}
