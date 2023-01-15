// axios
// 	.get('https://swapi.co/api/planets/')
// 	.then((res) => {
// 		//We don't have to parse the JSON!
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log('IN CATCH CALLBACK!!!');
// 		console.log(err);
// 	});

// axios
// 	.get('https://swapi.co/api/planetaslkjdaklsjds/') //BAD URL!
// 	.then((res) => {
// 		//We don't need to check for a 200 status code, because...
// 		//Axios will reject the promise for us, unlike fetch!
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		//In this example with a not-found URL, this callback will run...
// 		console.log('IN CATCH CALLBACK!!!');
// 		console.log(err);
// 	});

// // ********************************
// // USING FETCH INSTEAD...
// // ********************************
// // const checkStatusAndParse = (response) => {
// // 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// // 	return response.json();
// // };

// // const printPlanets = (data) => {
// // 	console.log('Loaded 10 more planets...');
// // 	for (let planet of data.results) {
// // 		console.log(planet.name);
// // 	}
// // 	return Promise.resolve(data.next);
// // };

// // const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// // 	return fetch(url);
// // };

// // fetchNextPlanets()
// // 	.then(checkStatusAndParse)
// // 	.then(printPlanets)
// // 	.then(fetchNextPlanets)
// // 	.then(checkStatusAndParse)
// // 	.then(printPlanets)
// // 	.then(fetchNextPlanets)
// // 	.then(checkStatusAndParse)
// // 	.then(printPlanets)
// // 	.catch((err) => {
// // 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// // 		console.log(err);
// // 	});

// const getResultPlanet = (res)=>{
// 	const data = res.data
// 	for(let planet of data.results){
// 		console.log(planet.name)
// 	}
// 	return Promise.resolve(data.next)
// }
// const nextUrl = (url) =>{
// 		return axios.get(url)
// }


// axios.get('https://swapi.dev/api/planets/')
// .then(getResultPlanet)
// .then(nextUrl)
// .then(getResultPlanet)
// .then(nextUrl)
// .then(getResultPlanet)
// .then(nextUrl)
// .then(getResultPlanet)
// .then(nextUrl)
// .catch((err) => {
// 	console.log('In catch callback')
// 	console.log(err)

// })
// mouch better refactor

const urlPlanet = (url = 'https://swapi.dev/api/planets/') => {
	return axios.get(url)
}
const displayName = ({data})=>{
	for (let planet of data.results){
		console.log(planet.name)
	}
	// return urlPlanet(data.next)
	return Promise.resolve(data.next)
}


urlPlanet()
.then(displayName)
.then(urlPlanet)
.then(displayName)
.then(urlPlanet)
.then(displayName)


.catch((err)=>{
	console.log('ERROR', err)
})