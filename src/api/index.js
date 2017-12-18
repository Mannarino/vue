const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=3a7d7393cac5f1ecbda28077c96e9032&format=json`;

export default function getArtist(country){
	const url= URL.replace(':country',country)
   return	fetch(url)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}